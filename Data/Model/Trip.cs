using System;

namespace   Trips.Data
{
    public class Trips
    {
        public int  Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime? CompletedDate { get; set; }
    }
}