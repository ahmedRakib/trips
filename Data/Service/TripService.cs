using System.Collections.Generic;
using System.Linq;
using Trips.Data;

namespace Trips.Data
{
    public class TripService : ITripService 
    {
        public List<Trip> GetAllTrips() => DummyData.Trips.ToList();
        public Trip Get(int tripId)
        {
            //code to get a single trip
            var trip = DummyData.Trips.FirstOrDefault(t => t.Id == tripId);
            return trip;
        }
        public void Add(Trip trip)
        {
            DummyData.Trips.Add(trip);
        }

        public Trip Update(Trip trip, int tripId)
        {
            
            Trip oldTrip = DummyData.Trips.FirstOrDefault(t => t.Id == tripId);

            if(oldTrip != null)
            {
                oldTrip.Name = trip.Name;
                oldTrip.Description = trip.Description;
                oldTrip.DateStarted = trip.DateStarted;
                oldTrip.DateCompleted = trip.DateCompleted;
                
                DummyData.Trips.Add(oldTrip);
            }
            return trip;
        }

        public void Delete(int tripId)
        {
            var trip = DummyData.Trips.FirstOrDefault(t => t.Id == tripId);
            if(trip != null)
            {
                DummyData.Trips.Remove(trip);           
            }
        }
    }
}