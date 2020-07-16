import pandas as pd
import numpy as np

""" supplier_data cols
Index(['Supplier_Name', 'PWSID', 'Stage_Invoked', 'Mandatory_Restrictions',
       'Reporting_Month', 'Production_Reported', '2013_Production_Reported',
       'CII_Reported', 'Agriculture_Reported', '2013_Agriculture_Reported',
       'Recycled_Reported', 'Units', 'Qualification', 'Population_Served',
       'R_GPCD_Reported', 'Enforcement_Actions', 'Implementation',
       'Conservation_Standard', 'Ag_Cert', 'Production_Calculated',
       '2013_Production_Calculated', 'CII_Calculated', 'R_GPCD_Calculated',
       'Percent_Residential_Use', 'Comments_Corrections', 'Hydrologic_Region',
       'Watering_Days_Per_Week', 'Complaints', 'Follow_Ups', 'Warnings',
       'Penalties_Rate', 'Penalties_Other', 'Enforcement_Comments'],
      dtype='object')
"""

""" water_sys_data cols
Index(['Water System No', 'Water System Name', 'Principal County Served',
       'Federal Water System Type -CODE', 'Federal Water System Type',
       'State Water System Type -CODE', 'State Water System Type',
       'Water System Status -CODE', 'Water System Status', 'Owner Type -CODE',
       'Owner Type', 'Primary Water Source Type -CODE',
       'Primary Water Source Type', 'Residential Population',
       'Non Transient Population', 'Transient Population', 'Total Population',
       'Number of Service Connections Agricultural',
       'Number of COMBINED Service Connections (CB)',
       'Number of Commercial (CM) Service Connections',
       'Numer of Institutional Service Conections',
       'Number of Residential Service Connections',
       'Total Number of Service Connections', 'Fee Code',
       'Fee Code Description',
       'Date of Sanitary Survey visit (SNSV Visit Date)', 'CITY',
       'Treatment Plant Class-CODE', 'Treatment Plant Class',
       'Distribution System Class-CODE', 'Distribution System Class'],
      dtype='object')
"""

supplier_data = "uw_supplier_data070720.csv"
df = pd.read_csv(supplier_data)
supplier_df = df[['PWSID','Stage_Invoked','Reporting_Month','Production_Reported','2013_Production_Reported','Recycled_Reported','Units','Population_Served','R_GPCD_Reported',
                  'Conservation_Standard','Production_Calculated','2013_Production_Calculated','Percent_Residential_Use','Hydrologic_Region','Watering_Days_Per_Week']].copy()
water_sys_data = "water_systems.csv"
df = pd.read_csv(water_sys_data)
water_sys_df = df[['Water System No','Water System Name','Principal County Served','Primary Water Source Type','Residential Population','Total Population', 'CITY']].copy()

county_df = water_sys_df[['Water System No','Principal County Served']].copy()
county_df.dropna()
county_df.drop_duplicates(subset='Water System No', keep='first', inplace=True)
county_df.set_index('Water System No')

model_df = supplier_df[['PWSID','Reporting_Month','Production_Reported','Units','Percent_Residential_Use','Population_Served','R_GPCD_Reported','Hydrologic_Region']].copy()
model_df.dropna(inplace=True)
model_df.reset_index(drop=True, inplace=True)
model_df['County'] = model_df['PWSID']

for ids in county_df['Water System No']:
    model_df.loc[model_df.PWSID == ids, "County"] = county_df.loc[county_df['Water System No'] == ids, 'Principal County Served'].item()

model_df.loc[model_df.Units=="AF",'Production_Reported']*=325851
model_df.loc[model_df.Units=="CCF",'Production_Reported']*=748
model_df.loc[model_df.Units=="MG",'Production_Reported']*=1000000
model_df.drop(columns=['Units'], inplace=True)
print(model_df)

model_df.to_csv("waterdata.csv")

print("DONE")
