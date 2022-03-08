using System.Collections.Generic;
namespace Trips.Data
{
    public interface ITripService
    {
        List<Trip> GetAllTrips();

        Trip Get(int tripId);

        void Add(Trip trip);

        Trip Update(Trip trip, int tripId);

        void Delete(int tripId);
    }
}