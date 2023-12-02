using CarStore.Entities.Entity.Logging;

namespace CarStore.Data.Repositories.LogRepository
{
    public interface ILogRepository
    {
        public void InsertApplicationErrorLog(LogEntity logException);
    }
}
