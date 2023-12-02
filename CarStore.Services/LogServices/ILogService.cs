using CarStore.Entities.Entity.Logging;

namespace CarStore.Services.LogServices
{
    public interface ILogService
    {
        public void InsertApplicationErrorLog(LogEntity logException);
    }
}
