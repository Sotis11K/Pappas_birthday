using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace Pappas_birthday.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [Route("/page2")]
        public IActionResult Page2()
        {
            return View();
        }
    }
}
