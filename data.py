import pandas as pd
import numpy as np
#file source: https://data.cnra.ca.gov/dataset/drinking-water-public-water-system-operations-monthly-water-production-and-conservation-informa
file = "/Users/nikitapatel/Documents/GitHub/InternHackathonIBM/uw_supplier_data070720.csv"

df = pd.read_csv(file)
df.drop(columns=['REPORTED Monthly Ag Use Reporting Month (This value is removed from REPORTED Total Monthly Potable Water Production Reporting Month by Water Board staff to obtain CALCULATED Total Monthly Potable Water Production Reporting Month Gallons)','Optional - REPORTED Recycled Water','REPORTED Monthly Ag Use 2013 (This value is removed from REPORTED Total Monthly Potable Water Production 2013 by Water Board Staff to obtain CALCULATED Total Monthly Potable Water Production 2013 Gallons)','Qualification','Optional - Enforcement Actions','Optional - Implementation', 'Supplier has Agricultural Water Use Exclusion Certification (list of received certifications available at: http://www.waterboards.ca.gov/water_issues/programs/conservation_portal/agriculture/)','Comments/Corrections','Complaints Received','Follow-up Actions','Warnings Issued','Rate Penalties Assessed (starting\nDec-15)','Penalties Assessed','Enforcement Comments'], axis=1, inplace=True)
df.rename(columns={"Conservation Standard \n(Jun 2015-Mar 2017)\n\n*Adjusted Mar-16\n*Revised Jun-16\n*Tentative Mar-17\n*Rescinded Apr-17": "State-mandated Conservation Standard", "CALCULATED R-GPCD Reporting Month (Values calculated by Water Board staff using methodology available at http://www.waterboards.ca.gov/waterrights/water_issues/programs/drought/docs/ws_tools/guidance_estimate_res_gpcd.pdf)":"CALCULATED R-GPCD Reporting Month"}, inplace=True)

df['REPORTED Monthly CII 2014/2015/2016 (Subset of REPORTED Total Monthly Potable Water Production Reporting Month)'].replace(np.nan, 0, inplace=True)

columns_list = [' REPORTED Total Monthly Potable Water Production Reporting Month ',' REPORTED Total Monthly Potable Water Production 2013 ', 'REPORTED Monthly CII 2014/2015/2016 (Subset of REPORTED Total Monthly Potable Water Production Reporting Month)']

for i in columns_list:
     # df[i] = np.where(df['REPORTED Units']=='AF',df[i]*325851,df[i]) #DO NOT RUN!!!!!


#debug
print(df.dtypes)
colnames = list(df)
print(colnames)
print(df.head(100))

df.to_csv("/Users/nikitapatel/Documents/GitHub/InternHackathonIBM/waterdata.csv")
