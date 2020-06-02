## Getting Started

Create an empty database called 'etl'
```sh
create database etl;
```

clone the repository and run this command
```sh
cd /etl/etl/
git pull origin master 
```

Open up a screen(sudo apt-get install screen) using the below command: 
```sh
screen -r
```
Run this commands sequentially in that order (please use latest version of each script. See https://github.com/AMPATH/etl/etl-scripts/database_updates/update_flat_tables_and_calculated_tables)
Each scripts takes a couple of seconds to hours depending with the amount of data in openmrs db
```sh
mysql etl < ./etl-scripts/flat_tables/flat_obs_v1.3.sql
mysql etl < ./etl-scripts/flat_tables/flat_orders_v1.1.sql
mysql etl < ./etl-scripts/flat_tables/flat_lab_obs_v1.9.sql
mysql etl < ./etl-scripts/calculated_tables/hiv_summary.sql
mysql etl < ./etl-scripts/calculated_tables/labs_and_imaging_v2.6.sql
mysql etl < ./etl-scripts/calculated_tables/vitals_v2.2.sql
mysql etl < ./etl-scripts/calculated_tables/hiv_vl_summary_v1.0.sql
mysql etl < ./etl-scripts/calculated_tables/pep_summary_v1.0.sql
mysql etl < ./etl-scripts/calculated_tables/defaulters_v2.3.sql

```

### Using Apache Airflow

Once done and the servers have been started, open your browser and head over to `http://localhost:8092` and you should see the airflow DAGs. Make sure to add your MySQL connection credentials under the the `Admin -> Connections` tab. The Connection ID must be `amrs_slave_conn`. After that, head back to DAGs and trigger the `etl_jobs_realtime` DAG.
