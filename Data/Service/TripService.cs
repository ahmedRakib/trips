using System.Collections.Generic;

namespace Trips.Data
{
    public class TripService : ITripService 
    {
        public List<Trip> GetAllTrips()
        {
            //code to get all trips

            return null;
        }

        public Trip Get(int tripId)
        {
            //code to get a single trip

            return null;
        }
        public void Add(Trip trip)
        {
            //code to save trip
        }

        public void Update(int tripId, Trip trip)
        {
            //code to update a trip
        }

        public void Delete(int tripId)
        {
            //code to delete a trip
        }
    }
}