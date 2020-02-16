using TaskManagerAPI.Identity;
using TaskManagerAPI.ViewModels;
using System.Threading.Tasks;

namespace TaskManagerAPI.ServiceContracts
{
    public interface IUsersService
    {
        Task<ApplicationUser> Authenticate(LoginViewModel loginViewModel);
    }
}

