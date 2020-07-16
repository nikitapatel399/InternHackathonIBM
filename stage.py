import pandas as pd
import numpy as np

water_data = "waterdata.csv"
water_df = pd.read_csv(water_data)
water_df['Stage'] = water_df['PWSID']
water_df.drop_duplicates(subset='County', keep='first', inplace=True)


supplier_data = "uw_supplier_data070720.csv"
df = pd.read_csv(supplier_data)
supplier_df = df[['PWSID','Reporting_Month','Stage_Invoked']].copy()
supplier_df.drop_duplicates(subset='PWSID', keep='first', inplace=True)


for ids in supplier_df['PWSID']:
     water_df.loc[water_df.PWSID == ids, 'Stage'] = supplier_df.loc[supplier_df['PWSID'] == ids, 'Stage_Invoked'].item()
water_df.fillna(0)
# df.drop(['B', 'C'], axis=1)
water_df.set_index('County')


print(water_df.Stage.unique())
print(water_df)

# water_sys_data = "water_systems.csv"
# df = pd.read_csv(water_sys_data)
# water_sys_df = df[['Water System No','Water System Name','Principal County Served','Primary Water Source Type','Residential Population','Total Population', 'CITY']].copy()

# county_df = water_sys_df[['Water System No','Water System Name','Principal County Served','Primary Water Source Type']].copy()
# county_df.dropna()
# county_df.drop_duplicates(subset='Water System No', keep='first', inplace=True)
# county_df.set_index('Water System No')

# model_df = supplier_df[['Supplier_Name','PWSID','Reporting_Month','Production_Reported','Units','Percent_Residential_Use','Population_Served','R_GPCD_Reported','Hydrologic_Region']].copy()
# model_df.dropna(inplace=True)
# model_df.reset_index(drop=True, inplace=True)
# model_df['County'] = model_df['PWSID']
# model_df['Water Source Type'] = model_df['PWSID']

# for ids in county_df['Water System No']:
#      model_df.loc[model_df.PWSID == ids, 'County'] = county_df.loc[county_df['Water System No'] == ids, 'Principal County Served'].item()
#      model_df.loc[model_df.PWSID == ids, 'Water Source Type'] = county_df.loc[county_df['Water System No'] == ids, 'Primary Water Source Type'].item()


# def reorder_columns(columns, first_cols=[], last_cols=[], drop_cols=[]):
#     columns = list(set(columns) - set(first_cols))
#     columns = list(set(columns) - set(drop_cols))
#     columns = list(set(columns) - set(last_cols))
#     new_order = first_cols + columns + last_cols
#     return new_order

# reordered_cols = reorder_columns(model_df.columns.tolist(), first_cols=['County','Hydrologic_Region','Supplier_Name','PWSID','Water Source Type','Reporting_Month','Production_Reported'], last_cols=['Percent_Residential_Use','Population_Served','R_GPCD_Reported'], drop_cols=['Units'])

# model_df = model_df[reordered_cols]
# model_df.reset_index(drop=True, inplace=True)
# model_df.rename(columns={"Hydrologic_Region":"Hydrologic Region","Supplier_Name":"Water System","PWSID":"Water System ID","Reporting_Month":"Reporting Month","Production_Reported":"Reported Production","Percent_Residential_Use":"Residential Use Percentage","Population_Served":"Population Served","R_GPCD_Reported":"Residential Gallons per Capita Day"})

# model_df.to_csv("waterdata.csv")