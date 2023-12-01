using Microsoft.AspNetCore.Identity;

namespace CarStore.Data.DbContext
{
    public class ApplicationUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string RoleName { get; set; }
        public string MobileNo { get; set; }
        public DateTime Created { get; set; }
        public string? CreatedBy { get; set; }
        public DateTime LastUpdated { get; set; }
        public string? LastUpdatedBy { get; set; }
    }
}
