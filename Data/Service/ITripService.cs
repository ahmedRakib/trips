using System.Collections.Generic;
namespace Trips.Data
{
    public interface ITripService
    {
        List<Trip> GetAllTrips();

        Trip Get(int tripId);

        void Add(Trip trip);

        void Update(int tripId, Trip trip);

        void Delete(int tripId);
    }
}