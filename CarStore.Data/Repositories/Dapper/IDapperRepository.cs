using Dapper;
using System.Data;
using System.Data.Common;

namespace CarStore.Data.Repositories.Dapper
{
    public interface IDapperRepository : IDisposable
    {
        DbConnection GetDbconnection(string connectionName);
        T Get<T>(string sp, DynamicParameters parms, string connectionName, CommandType commandType = CommandType.StoredProcedure);
        List<T> GetAll<T>(string sp, DynamicParameters parms, string connectionName, CommandType commandType = CommandType.StoredProcedure);
        void Execute(string sp, DynamicParameters parms, string connectionName, CommandType commandType = CommandType.StoredProcedure);
        T Insert<T>(string sp, DynamicParameters parms, string connectionName, CommandType commandType = CommandType.StoredProcedure);
        T Update<T>(string sp, DynamicParameters parms, string connectionName, CommandType commandType = CommandType.StoredProcedure);
    }
}
