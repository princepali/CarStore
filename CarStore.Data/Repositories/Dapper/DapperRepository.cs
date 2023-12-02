using Dapper;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.Common;

namespace CarStore.Data.Repositories.Dapper
{
    public class DapperRepository : IDapperRepository
    {
        private readonly IConfiguration _config;
        public DapperRepository(IConfiguration config)
        {
            _config = config;
        }

        public void Dispose()

        {

        }
        int connectionTimeout = 300000;
        public void Execute(string sp, DynamicParameters parms, string connectionName, CommandType commandType = CommandType.StoredProcedure)
        {
            using IDbConnection db = new SqlConnection(_config.GetConnectionString(connectionName));

            db.Query(sp, parms, commandType: commandType).FirstOrDefault();
        }

        public T Get<T>(string sp, DynamicParameters parms, string connectionName, CommandType commandType = CommandType.StoredProcedure)
        {
            using IDbConnection db = new SqlConnection(_config.GetConnectionString(connectionName));

            return db.Query<T>(sp, parms, commandTimeout: connectionTimeout, commandType: commandType).FirstOrDefault();
        }

        public List<T> GetAll<T>(string sp, DynamicParameters parms, string connectionName, CommandType commandType = CommandType.StoredProcedure)
        {
            using IDbConnection db = new SqlConnection(_config.GetConnectionString(connectionName));
            return db.Query<T>(sp, parms, commandTimeout: connectionTimeout, commandType: commandType).ToList();
        }

        public DbConnection GetDbconnection(string connectionName)
        {
            return new SqlConnection(_config.GetConnectionString(connectionName));
        }

        public T Insert<T>(string sp, DynamicParameters parms, string connectionName, CommandType commandType = CommandType.StoredProcedure)
        {
            T result;
            using IDbConnection db = new SqlConnection(_config.GetConnectionString(connectionName));
            try
            {
                if (db.State == ConnectionState.Closed)
                    db.Open();

                using var tran = db.BeginTransaction();
                try
                {
                    result = db.Query<T>(sp, parms, commandTimeout: connectionTimeout, commandType: commandType, transaction: tran).FirstOrDefault();
                    tran.Commit();
                }
                catch (Exception ex)
                {
                    tran.Rollback();
                    throw ex;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                if (db.State == ConnectionState.Open)
                    db.Close();
            }

            return result;
        }

        public T Update<T>(string sp, DynamicParameters parms, string connectionName, CommandType commandType = CommandType.StoredProcedure)
        {
            T result;
            using IDbConnection db = new SqlConnection(_config.GetConnectionString(connectionName));
            try
            {
                if (db.State == ConnectionState.Closed)
                    db.Open();

                using var tran = db.BeginTransaction();
                try
                {
                    result = db.Query<T>(sp, parms, commandTimeout: connectionTimeout, commandType: commandType, transaction: tran).FirstOrDefault();
                    tran.Commit();
                }
                catch (Exception ex)
                {
                    tran.Rollback();
                    throw ex;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                if (db.State == ConnectionState.Open)
                    db.Close();
            }

            return result;
        }
    }
}
