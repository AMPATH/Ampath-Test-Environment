# Ampath-Test-Environment
A replica of the Ampath production environment deployed in a docker environment

## Configuring Database
To Extract the database, run the following commands in order

```sh
cd dbdump/amrsdb

cat amrspart* > ../amrs.sql
```

## Configuring nginx webserver
Change the ip address in `default.conf` to your local address obtained by running the following command:
 ```
 ifconfig <interface> | grep inet | grep -v inet6 | awk '{print $2}'
 ```
## Running Applications
```sh 
docker-compose up -d
```
## Accessing Applications
To access the deployed applications use the following urls:
1. http://localhost/amrs (openmrs instance)
2. http://localhost/ng2-amrs/# (Ampath POC)
3. http://localhost/form-builder/# (Ampath POC form builder)
4. http://localhost/user_management_app-amrs/# (Ampath POC user management)
### Using Apache Airflow

Once done and the servers have been started, open your browser and head over to `http://localhost:8092` and you should see the airflow DAGs. Make sure to add your MySQL connection credentials under the the `Admin -> Connections` tab. The Connection ID must be `amrs_slave_conn`. After that, head back to DAGs and trigger the `etl_jobs_realtime` DAG.
