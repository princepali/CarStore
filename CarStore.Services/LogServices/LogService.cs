using CarStore.Data.Repositories.LogRepository;
using CarStore.Entities.Entity.Logging;

namespace CarStore.Services.LogServices
{
    public class LogService : ILogService
    {
        private readonly ILogRepository _logRepository;
        public LogService(ILogRepository logRepository)
        {
            _logRepository = logRepository;
        }
        //Insert log in database by using exception catching
        public void InsertApplicationErrorLog(LogEntity logException)
        {
            _logRepository.InsertApplicationErrorLog(logException);
        }
    }
}
