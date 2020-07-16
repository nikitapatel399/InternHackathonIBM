import pandas as pd
import numpy as np

supplier_data = "uw_supplier_data070720.csv"
df = pd.read_csv(supplier_data)
supplier_df = df[['Supplier_Name','PWSID','Stage_Invoked','Reporting_Month','Production_Reported','2013_Production_Reported','Recycled_Reported','Units','Population_Served','R_GPCD_Reported',
                  'Conservation_Standard','Production_Calculated','2013_Production_Calculated','Percent_Residential_Use','Hydrologic_Region','Watering_Days_Per_Week']].copy()
water_sys_data = "water_systems.csv"
df = pd.read_csv(water_sys_data)
water_sys_df = df[['Water System No','Water System Name','Principal County Served','Primary Water Source Type','Residential Population','Total Population', 'CITY']].copy()

county_df = water_sys_df[['Water System No','Water System Name','Principal County Served','Primary Water Source Type']].copy()
county_df.dropna()
county_df.drop_duplicates(subset='Water System No', keep='first', inplace=True)
county_df.set_index('Water System No')

model_df = supplier_df[['Supplier_Name','PWSID','Reporting_Month','Production_Reported','Units','Percent_Residential_Use','Population_Served','R_GPCD_Reported','Hydrologic_Region']].copy()
model_df.dropna(inplace=True)
model_df.reset_index(drop=True, inplace=True)
model_df['County'] = model_df['PWSID']
model_df['Water Source Type'] = model_df['PWSID']

for ids in county_df['Water System No']:
     model_df.loc[model_df.PWSID == ids, 'County'] = county_df.loc[county_df['Water System No'] == ids, 'Principal County Served'].item()
     model_df.loc[model_df.PWSID == ids, 'Water Source Type'] = county_df.loc[county_df['Water System No'] == ids, 'Primary Water Source Type'].item()

model_df.loc[model_df.Units=="AF",'Production_Reported']*=325851
model_df.loc[model_df.Units=="CCF",'Production_Reported']*=748
model_df.loc[model_df.Units=="MG",'Production_Reported']*=1000000

def reorder_columns(columns, first_cols=[], last_cols=[], drop_cols=[]):
    columns = list(set(columns) - set(first_cols))
    columns = list(set(columns) - set(drop_cols))
    columns = list(set(columns) - set(last_cols))
    new_order = first_cols + columns + last_cols
    return new_order

reordered_cols = reorder_columns(model_df.columns.tolist(), first_cols=['County','Hydrologic_Region','Supplier_Name','PWSID','Water Source Type','Reporting_Month','Production_Reported'], last_cols=['Percent_Residential_Use','Population_Served','R_GPCD_Reported'], drop_cols=['Units'])

model_df = model_df[reordered_cols]
model_df.reset_index(drop=True, inplace=True)
model_df.rename(columns={"Hydrologic_Region":"Hydrologic Region","Supplier_Name":"Water System","PWSID":"Water System ID","Reporting_Month":"Reporting Month","Production_Reported":"Reported Production","Percent_Residential_Use":"Residential Use Percentage","Population_Served":"Population Served","R_GPCD_Reported":"Residential Gallons per Capita Day"})

model_df.to_csv("waterdata.csv")
