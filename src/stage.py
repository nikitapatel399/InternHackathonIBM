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


water_df.replace(to_replace=[None, "none", "Normal"], value=0)
water_df.fillna(0, inplace=True)
water_df.set_index('County')


stage_df = water_df[['County','Hydrologic_Region','Stage','Supplier_Name','Water Source Type','Population_Served','Production_Reported','R_GPCD_Reported']].copy()
stage_df.set_index('County', inplace=True)

print(stage_df)
stage_df.to_json("county_summarypy.json")
