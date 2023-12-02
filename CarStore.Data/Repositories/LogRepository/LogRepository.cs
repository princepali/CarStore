using CarStore.Data.Repositories.Dapper;
using CarStore.Entities.Entity.Common;
using CarStore.Entities.Entity.Logging;
using Dapper;
using System.Data;

namespace CarStore.Data.Repositories.LogRepository
{
    public class LogRepository : ILogRepository
    {

        private readonly IDapperRepository _dapperRepository;
        public LogRepository(IDapperRepository dapperRepository)
        {
            _dapperRepository = dapperRepository;
        }
        public void InsertApplicationErrorLog(LogEntity logException)
        {
            DynamicParameters dbParams = new DynamicParameters();
            dbParams.AddDynamicParams(
              new
              {
                  logException.ExceptionMessage,
                  logException.ExceptionType,
                  logException.UserName
              });
            _dapperRepository.Execute(ProcedureConstants.ProcedureInsertApplicationErrorLog, dbParams, CarStoreConstants.DB_CarStore, commandType: CommandType.StoredProcedure);
        }
    }
}
