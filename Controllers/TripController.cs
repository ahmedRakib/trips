using Microsoft.AspNetCore.Mvc;
using Trips.Data;

namespace Trips.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TripController : ControllerBase
    {
        private ITripService _tripService;
        public TripController(ITripService tripService)
        {
            _tripService = tripService;
        }

        [HttpPost]
        public IActionResult Add([FromBody] Trip trip)
        {
            _tripService.Add(trip);
            return Ok();
        }

        [HttpPut("/{id}")]
        public IActionResult Update([FromBody] Trip trip, int id)
        {
            _tripService.Update(trip, id);

            return Ok(trip);
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var allTrips = _tripService.GetAllTrips();

            return Ok(allTrips);
        }

        [HttpGet("/{id}")]
        public IActionResult Get(int id)
        {
            var trip = _tripService.Get(id);

            return Ok(trip);
        }

        [HttpDelete("/{id}")]
        public IActionResult Delete(int id)
        {
            _tripService.Delete(id);

            return Ok();
        }
    }
}