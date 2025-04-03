// import { useState, useEffect } from 'react';
// import { Star, MapPin, Clock, Search } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import MainLayout from '@/components/MainLayout';
// import RestaurantCard from '@/components/RestaurantCard';
// import { useNavigate,useLocation } from 'react-router-dom';
// import { useToast } from '@/hooks/use-toast';

// const Restaurants = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userName, setUserName] = useState('');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [restaurants, setRestaurants] = useState([]);
//   const [visibleRestaurants, setVisibleRestaurants] = useState([]);
//   const [showAll, setShowAll] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { toast } = useToast();

//   useEffect(() => {
//     // Check if user is logged in
//     const loginStatus = localStorage.getItem('isLoggedIn');
//     const name = localStorage.getItem('userName');

//     if (loginStatus !== 'true' || !name) {
//       // Redirect to login if not logged in
//       toast({
//         title: "Authentication Required",
//         description: "Please login to view restaurants",
//         variant: "destructive",
//       });
//       navigate('/auth');
//       return;
//     }

//     setIsLoggedIn(true);
//     setUserName(name);

//     if (location.state?.restaurants) {
//       setRestaurants(location.state.restaurants);
//       setVisibleRestaurants(location.state.restaurants.slice(0, 4));
//     }
//   }, [navigate, toast, location]);

//   // }, [navigate, toast]);

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     localStorage.removeItem('isLoggedIn');
//     localStorage.removeItem('userName');
//     localStorage.removeItem('token');
//     toast({
//       title: "Logged Out",
//       description: "You have been successfully logged out",
//     });
//     navigate('/');
//   };

//   const handleSearch = () => {
//   //   toast({
//   //     title: "Search initiated",
//   //     description: `Searching for '${searchQuery}'`,
//   //   });
//   //   // In a real app, this would filter the restaurant data based on the search query
//   // };
//   const filtered = restaurants.filter(r =>
//     r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     r.address.toLowerCase().includes(searchQuery.toLowerCase())
//   );
//   setRestaurants(filtered);
//   setVisibleRestaurants(filtered.slice(0, 4));
//   setShowAll(false);
//   toast({
//     title: "Search Results",
//     description: `Found ${filtered.length} restaurants matching '${searchQuery}'`,
//   });
// };

// const handleViewAll = () => {
//   setVisibleRestaurants(restaurants);
//   setShowAll(true);
// };

//   return (
//     <MainLayout isLoggedIn={isLoggedIn} userName={userName} onLogout={handleLogout}>
//      <div className="max-w-6xl mx-auto space-y-6 p-4"/>
//         <div className="flex justify-between items-center">
//           <h1 className="text-2xl font-bold">Restaurants on Your Route</h1>
//           <Button variant="outline">View on Map</Button>
//         </div>

//         <div className="flex w-full items-center gap-2">
//           <div className="relative flex-1">
//             <Input
//               className="pr-10"
//               placeholder="Search restaurants by name, cuisine, or location..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
//             />
//             <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
//               <Search className="h-4 w-4" />
//             </div>
//           </div>
//           <Button onClick={handleSearch}>
//             <Search className="mr-2 h-4 w-4" />
//             Search
//           </Button>
//         </div>

//         <div className="relative">
//           <div className="flex justify-end mb-2">
//             {!showAll && restaurants.length > 4 && (
//               <Button variant="link" onClick={handleViewAll}>
//                 View All ({restaurants.length})
//               </Button>
//             )}
//           </div>

//         <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//           {visibleRestaurants.map((restaurant, index) => (
//             <RestaurantCard
//             key={index}
//             name={restaurant.name}
//             address={restaurant.address}
//             rating={restaurant.rating}
//             distance_to_road={restaurant.distance_to_road}
//             travel_time={restaurant.travel_time}
//             total_traffic_status={restaurant.total_traffic_status}
//             total_traffic_minutes={restaurant.total_traffic_minutes}
//             internal_traffic_status={restaurant.internal_traffic_status}
//             internal_traffic_value={restaurant.internal_traffic_value}
//             road={restaurant.road}
//             place_id={restaurant.place_id}
//             />
//           ))}
//           {/* <RestaurantCard />
//           <RestaurantCard />
//           <RestaurantCard /> */}
//         </div>
//       </div>
//     </MainLayout>
//   );
// };

// export default Restaurants;

// import { useState, useEffect } from 'react';
// import { Star, MapPin, Clock, Search } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import MainLayout from '@/components/MainLayout';
// import RestaurantCard from '@/components/RestaurantCard';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useToast } from '@/hooks/use-toast';

// const Restaurants = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userName, setUserName] = useState('');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [restaurants, setRestaurants] = useState([]);
//   const [filteredRestaurants, setFilteredRestaurants] = useState([]);
//   const [visibleRestaurants, setVisibleRestaurants] = useState([]);
//   const [showAll, setShowAll] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { toast } = useToast();

//   useEffect(() => {
//     // Check if user is logged in
//     const loginStatus = localStorage.getItem('isLoggedIn');
//     const name = localStorage.getItem('userName');

//     if (loginStatus !== 'true' || !name) {
//       // Redirect to login if not logged in
//       toast({
//         title: "Authentication Required",
//         description: "Please login to view restaurants",
//         variant: "destructive",
//       });
//       navigate('/auth');
//       return;
//     }

//     setIsLoggedIn(true);
//     setUserName(name);

//     if (location.state?.restaurants) {
//       const initialRestaurants = location.state.restaurants;
//       setRestaurants(initialRestaurants);
//       setFilteredRestaurants(initialRestaurants);
//       setVisibleRestaurants(initialRestaurants.slice(0, 6));
//     }
//   }, [navigate, toast, location]);

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     localStorage.removeItem('isLoggedIn');
//     localStorage.removeItem('userName');
//     localStorage.removeItem('token');
//     toast({
//       title: "Logged Out",
//       description: "You have been successfully logged out",
//     });
//     navigate('/');
//   };

//   const handleSearch = () => {
//     if (!searchQuery.trim()) {
//       setFilteredRestaurants(restaurants);
//       setVisibleRestaurants(restaurants.slice(0, 6));
//       setShowAll(false);
//       return;
//     }

//     const filtered = restaurants.filter(r =>
//       r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       r.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       (r.road && r.road.toLowerCase().includes(searchQuery.toLowerCase()))
//     );

//     setFilteredRestaurants(filtered);
//     setVisibleRestaurants(filtered.slice(0, 6));
//     setShowAll(false);

//     toast({
//       title: filtered.length > 0 ? "Search Results" : "No Results Found",
//       description: filtered.length > 0
//         ? `Found ${filtered.length} restaurants matching '${searchQuery}'`
//         : `No restaurants found for '${searchQuery}'`,
//     });
//   };

//   const handleViewAll = () => {
//     setVisibleRestaurants(filteredRestaurants);
//     setShowAll(true);
//   };

//   const handleViewLess = () => {
//     setVisibleRestaurants(filteredRestaurants.slice(0, 6));
//     setShowAll(false);
//   };

//   const handleFiltersApplied = (filters: any) => {
//     // Apply filters to the current restaurant list
//     let results = [...restaurants];

//     // Apply rating filter
//     if (filters.minRating > 0) {
//       results = results.filter(r =>
//         r.rating !== 'Not rated' && parseFloat(r.rating) >= filters.minRating
//       );
//     }

//     // Apply traffic time filter
//     if (filters.maxTrafficTime < 60) {
//       results = results.filter(r =>
//         r.total_traffic_minutes <= filters.maxTrafficTime
//       );
//     }

//     // Apply food category filter
//     if (filters.foodCategory) {
//       results = results.filter(r =>
//         r.name.toLowerCase().includes(filters.foodCategory.toLowerCase()) ||
//         (r.cuisineType && r.cuisineType.toLowerCase().includes(filters.foodCategory.toLowerCase()))
//       );
//     }

//     // Apply cuisine type filter
//     if (filters.cuisineType) {
//       results = results.filter(r =>
//         r.cuisineType && r.cuisineType.toLowerCase() === filters.cuisineType.toLowerCase()
//       );
//     }

//     // Apply sorting
//     if (filters.sortOption === 'traffic') {
//       results.sort((a, b) => a.total_traffic_minutes - b.total_traffic_minutes);
//     } else {
//       // Default sort by rating
//       results.sort((a, b) => {
//         const ratingA = a.rating === 'Not rated' ? 0 : parseFloat(a.rating);
//         const ratingB = b.rating === 'Not rated' ? 0 : parseFloat(b.rating);
//         return ratingB - ratingA;
//       });
//     }

//     setFilteredRestaurants(results);
//     setVisibleRestaurants(results.slice(0, 6));
//     setShowAll(false);

//     toast({
//       title: "Filters Applied",
//       description: `Showing ${results.length} matching restaurants`,
//     });
//   };

//   const handleViewDetails = (place_id: string) => {
//     // Navigate to restaurant details page or show modal
//     console.log('View details for place:', place_id);
//     // In a real app, you would navigate to a details page:
//     // navigate(`/restaurant/${place_id}`);
//   };

//   return (
//     <MainLayout
//       isLoggedIn={isLoggedIn}
//       userName={userName}
//       onLogout={handleLogout}
//       onFiltersApplied={handleFiltersApplied}
//     >
//       <div className="max-w-6xl mx-auto space-y-6 p-4">
//         <div className="flex justify-between items-center">
//           <h1 className="text-2xl font-bold">Restaurants on Your Route</h1>
//           <Button variant="outline">View on Map</Button>
//         </div>

//         <div className="flex w-full items-center gap-2">
//           <div className="relative flex-1">
//             <Input
//               className="pr-10"
//               placeholder="Search restaurants by name, cuisine, or location..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
//             />
//             <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
//               <Search className="h-4 w-4" />
//             </div>
//           </div>
//           <Button onClick={handleSearch}>
//             <Search className="mr-2 h-4 w-4" />
//             Search
//           </Button>
//         </div>

//         <div className="relative">
//           <div className="flex justify-end mb-2">
//             {!showAll && filteredRestaurants.length > 6 ? (
//               <Button variant="link" onClick={handleViewAll}>
//                 View All ({filteredRestaurants.length})
//               </Button>
//             ) : showAll && filteredRestaurants.length > 6 ? (
//               <Button variant="link" onClick={handleViewLess}>
//                 View Less
//               </Button>
//             ) : null}
//           </div>

//           <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//             {visibleRestaurants.map((restaurant, index) => (
//               <RestaurantCard
//                 key={index}
//                 name={restaurant.name}
//                 address={restaurant.address}
//                 rating={restaurant.rating}
//                 distance_to_road={restaurant.distance_to_road}
//                 travel_time={restaurant.travel_time}
//                 total_traffic_status={restaurant.total_traffic_status}
//                 total_traffic_minutes={restaurant.total_traffic_minutes}
//                 internal_traffic_status={restaurant.internal_traffic_status}
//                 internal_traffic_value={restaurant.internal_traffic_value}
//                 road={restaurant.road}
//                 place_id={restaurant.place_id}
//                 onDetailsClick={handleViewDetails}
//               />
//             ))}
//           </div>

//           {filteredRestaurants.length === 0 && (
//             <div className="text-center py-8">
//               <p className="text-muted-foreground">No restaurants found matching your criteria</p>
//               <Button
//                 variant="outline"
//                 className="mt-4"
//                 onClick={() => {
//                   setFilteredRestaurants(restaurants);
//                   setVisibleRestaurants(restaurants.slice(0, 6));
//                   setSearchQuery('');
//                 }}
//               >
//                 Clear Filters
//               </Button>
//             </div>
//           )}
//         </div>
//       </div>
//     </MainLayout>
//   );
// };

// export default Restaurants;

// import { useState, useEffect } from 'react';
// import { Star, MapPin, Clock, Search } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import MainLayout from '@/components/MainLayout';
// import RestaurantCard from '@/components/RestaurantCard';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useToast } from '@/hooks/use-toast';

// const Restaurants = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userName, setUserName] = useState('');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [restaurants, setRestaurants] = useState([]);
//   const [filteredRestaurants, setFilteredRestaurants] = useState([]);
//   const [visibleRestaurants, setVisibleRestaurants] = useState([]);
//   const [showAll, setShowAll] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { toast } = useToast();

//   useEffect(() => {
//     // Check if user is logged in
//     const loginStatus = localStorage.getItem('isLoggedIn');
//     const name = localStorage.getItem('userName');

//     if (loginStatus !== 'true' || !name) {
//       // Redirect to login if not logged in
//       toast({
//         title: "Authentication Required",
//         description: "Please login to view restaurants",
//         variant: "destructive",
//       });
//       navigate('/auth');
//       return;
//     }

//     setIsLoggedIn(true);
//     setUserName(name);

//     if (location.state?.restaurants) {
//       const initialRestaurants = location.state.restaurants;
//       setRestaurants(initialRestaurants);
//       setFilteredRestaurants(initialRestaurants);
//       setVisibleRestaurants(initialRestaurants.slice(0, 4)); // Changed to 4 initially
//     }
//   }, [navigate, toast, location]);

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     localStorage.removeItem('isLoggedIn');
//     localStorage.removeItem('userName');
//     localStorage.removeItem('token');
//     toast({
//       title: "Logged Out",
//       description: "You have been successfully logged out",
//     });
//     navigate('/');
//   };

//   const handleSearch = () => {
//     if (!searchQuery.trim()) {
//       setFilteredRestaurants(restaurants);
//       setVisibleRestaurants(restaurants.slice(0, 4)); // Reset to 4 on clear search
//       setShowAll(false);
//       return;
//     }

//     const filtered = restaurants.filter(r =>
//       r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       r.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       (r.road && r.road.toLowerCase().includes(searchQuery.toLowerCase()))
//     );

//     setFilteredRestaurants(filtered);
//     setVisibleRestaurants(filtered.slice(0, 4)); // Show 4 after search
//     setShowAll(false);

//     toast({
//       title: filtered.length > 0 ? "Search Results" : "No Results Found",
//       description: filtered.length > 0
//         ? `Found ${filtered.length} restaurants matching '${searchQuery}'`
//         : `No restaurants found for '${searchQuery}'`,
//     });
//   };

//   const handleViewAll = () => {
//     setVisibleRestaurants(filteredRestaurants.slice(0, 60)); // Show up to 60
//     setShowAll(true);
//   };

//   const handleViewLess = () => {
//     setVisibleRestaurants(filteredRestaurants.slice(0, 4)); // Back to 4
//     setShowAll(false);
//   };

//   const handleFiltersApplied = (filters: any) => {
//     // Apply filters to the current restaurant list
//     let results = [...restaurants];

//     // Apply rating filter
//     if (filters.minRating > 0) {
//       results = results.filter(r =>
//         r.rating !== 'Not rated' && parseFloat(r.rating) >= filters.minRating
//       );
//     }

//     // Apply traffic time filter
//     if (filters.maxTrafficTime < 60) {
//       results = results.filter(r =>
//         r.total_traffic_minutes <= filters.maxTrafficTime
//       );
//     }

//     // Apply food category filter
//     if (filters.foodCategory) {
//       results = results.filter(r =>
//         r.name.toLowerCase().includes(filters.foodCategory.toLowerCase()) ||
//         (r.cuisineType && r.cuisineType.toLowerCase().includes(filters.foodCategory.toLowerCase()))
//       );
//     }

//     // Apply cuisine type filter
//     if (filters.cuisineType) {
//       results = results.filter(r =>
//         r.cuisineType && r.cuisineType.toLowerCase() === filters.cuisineType.toLowerCase()
//       );
//     }

//     // Apply sorting
//     if (filters.sortOption === 'traffic') {
//       results.sort((a, b) => a.total_traffic_minutes - b.total_traffic_minutes);
//     } else {
//       // Default sort by rating
//       results.sort((a, b) => {
//         const ratingA = a.rating === 'Not rated' ? 0 : parseFloat(a.rating);
//         const ratingB = b.rating === 'Not rated' ? 0 : parseFloat(b.rating);
//         return ratingB - ratingA;
//       });
//     }

//     setFilteredRestaurants(results);
//     setVisibleRestaurants(results.slice(0, 4)); // Show 4 after filters
//     setShowAll(false);

//     toast({
//       title: "Filters Applied",
//       description: `Showing ${results.length} matching restaurants`,
//     });
//   };

//   const handleViewDetails = (place_id: string) => {
//     // Navigate to restaurant details page or show modal
//     console.log('View details for place:', place_id);
//     // In a real app, you would navigate to a details page:
//     // navigate(`/restaurant/${place_id}`);
//   };

//   return (
//     <MainLayout
//       isLoggedIn={isLoggedIn}
//       userName={userName}
//       onLogout={handleLogout}
//       onFiltersApplied={handleFiltersApplied}
//     >
//       <div className="max-w-6xl mx-auto space-y-6 p-4">
//         <div className="flex justify-between items-center">
//           <h1 className="text-2xl font-bold">Restaurants on Your Route</h1>
//           <Button variant="outline">View on Map</Button>
//         </div>

//         <div className="flex w-full items-center gap-2">
//           <div className="relative flex-1">
//             <Input
//               className="pr-10"
//               placeholder="Search restaurants by name, cuisine, or location..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
//             />
//             <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
//               <Search className="h-4 w-4" />
//             </div>
//           </div>
//           <Button onClick={handleSearch}>
//             <Search className="mr-2 h-4 w-4" />
//             Search
//           </Button>
//         </div>

//         <div className="relative">
//           <div className="flex justify-end mb-2">
//             {!showAll && filteredRestaurants.length > 4 ? (
//               <Button variant="link" onClick={handleViewAll}>
//                 View All ({filteredRestaurants.length})
//               </Button>
//             ) : showAll && filteredRestaurants.length > 4 ? (
//               <Button variant="link" onClick={handleViewLess}>
//                 View Less
//               </Button>
//             ) : null}
//           </div>

//           <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//             {visibleRestaurants.map((restaurant, index) => (
//               <RestaurantCard
//                 key={index}
//                 name={restaurant.name}
//                 address={restaurant.address}
//                 rating={restaurant.rating}
//                 distance_to_road={restaurant.distance_to_road}
//                 travel_time={restaurant.travel_time}
//                 total_traffic_status={restaurant.total_traffic_status}
//                 total_traffic_minutes={restaurant.total_traffic_minutes}
//                 internal_traffic_status={restaurant.internal_traffic_status}
//                 internal_traffic_value={restaurant.internal_traffic_value}
//                 road={restaurant.road}
//                 place_id={restaurant.place_id}
//                 onDetailsClick={handleViewDetails}
//               />
//             ))}
//           </div>

//           {filteredRestaurants.length === 0 && (
//             <div className="text-center py-8">
//               <p className="text-muted-foreground">No restaurants found matching your criteria</p>
//               <Button
//                 variant="outline"
//                 className="mt-4"
//                 onClick={() => {
//                   setFilteredRestaurants(restaurants);
//                   setVisibleRestaurants(restaurants.slice(0, 4)); // Reset to 4
//                   setSearchQuery('');
//                 }}
//               >
//                 Clear Filters
//               </Button>
//             </div>
//           )}
//         </div>
//       </div>
//     </MainLayout>
//   );
// };

// export default Restaurants;

// import { useState, useEffect } from "react";
// import { Star, MapPin, Clock, Search } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import MainLayout from "@/components/MainLayout";
// import RestaurantCard from "@/components/RestaurantCard";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useToast } from "@/hooks/use-toast";

// const Restaurants = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userName, setUserName] = useState("");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [restaurants, setRestaurants] = useState([]);
//   const [filteredRestaurants, setFilteredRestaurants] = useState([]);
//   const [visibleRestaurants, setVisibleRestaurants] = useState([]);
//   const [showAll, setShowAll] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { toast } = useToast();

//   useEffect(() => {
//     const loginStatus = localStorage.getItem("isLoggedIn");
//     const name = localStorage.getItem("userName");

//     if (loginStatus !== "true" || !name) {
//       toast({
//         title: "Authentication Required",
//         description: "Please login to view restaurants",
//         variant: "destructive",
//       });
//       navigate("/auth");
//       return;
//     }

//     setIsLoggedIn(true);
//     setUserName(name);

//     if (location.state?.restaurants) {
//       const initialRestaurants = location.state.restaurants;
//       setRestaurants(initialRestaurants);
//       setFilteredRestaurants(initialRestaurants);
//       setVisibleRestaurants(initialRestaurants.slice(0, 4)); // 4 initially (change to 3 if preferred)
//     }
//   }, [navigate, toast, location.state?.restaurants]);

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     localStorage.removeItem("isLoggedIn");
//     localStorage.removeItem("userName");
//     localStorage.removeItem("token");
//     toast({
//       title: "Logged Out",
//       description: "You have been successfully logged out",
//     });
//     navigate("/");
//   };

//   const handleSearch = () => {
//     if (!searchQuery.trim()) {
//       setFilteredRestaurants(restaurants);
//       setVisibleRestaurants(restaurants.slice(0, 4)); // Reset to 4
//       setShowAll(false);
//       return;
//     }

//     const filtered = restaurants.filter(
//       (r) =>
//         r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         r.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         (r.road && r.road.toLowerCase().includes(searchQuery.toLowerCase()))
//     );

//     setFilteredRestaurants(filtered);
//     setVisibleRestaurants(filtered.slice(0, 4)); // 4 after search
//     setShowAll(false);

//     toast({
//       title: filtered.length > 0 ? "Search Results" : "No Results Found",
//       description:
//         filtered.length > 0
//           ? `Found ${filtered.length} restaurants matching '${searchQuery}'`
//           : `No restaurants found for '${searchQuery}'`,
//     });
//   };

//   const handleViewAll = () => {
//     setVisibleRestaurants(filteredRestaurants.slice(0, 60)); // Show all 60
//     setShowAll(true);
//   };

//   const handleViewLess = () => {
//     setVisibleRestaurants(filteredRestaurants.slice(0, 4)); // Back to 4
//     setShowAll(false);
//   };

//   const handleFiltersApplied = (filters: any) => {
//     let results = [...restaurants];

//     if (filters.minRating > 0) {
//       results = results.filter(
//         (r) =>
//           r.rating !== "Not rated" && parseFloat(r.rating) >= filters.minRating
//       );
//     }

//     if (filters.maxTrafficTime < 60) {
//       results = results.filter(
//         (r) => r.total_traffic_minutes <= filters.maxTrafficTime
//       );
//     }

//     if (filters.foodCategory) {
//       results = results.filter(
//         (r) =>
//           r.name.toLowerCase().includes(filters.foodCategory.toLowerCase()) ||
//           (r.cuisineType &&
//             r.cuisineType
//               .toLowerCase()
//               .includes(filters.foodCategory.toLowerCase()))
//       );
//     }

//     if (filters.cuisineType) {
//       results = results.filter(
//         (r) =>
//           r.cuisineType &&
//           r.cuisineType.toLowerCase() === filters.cuisineType.toLowerCase()
//       );
//     }

//     if (filters.sortOption === "traffic") {
//       results.sort((a, b) => a.total_traffic_minutes - b.total_traffic_minutes);
//     } else {
//       results.sort((a, b) => {
//         const ratingA = a.rating === "Not rated" ? 0 : parseFloat(a.rating);
//         const ratingB = b.rating === "Not rated" ? 0 : parseFloat(b.rating);
//         return ratingB - ratingA;
//       });
//     }

//     setFilteredRestaurants(results);
//     setVisibleRestaurants(results.slice(0, 4)); // 4 after filters
//     setShowAll(false);

//     toast({
//       title: "Filters Applied",
//       description: `Showing ${results.length} matching restaurants`,
//     });
//   };

//   const handleViewDetails = (place_id: string) => {
//     console.log("View details for place:", place_id);
//   };

//   return (
//     <MainLayout
//       isLoggedIn={isLoggedIn}
//       userName={userName}
//       onLogout={handleLogout}
//       onFiltersApplied={handleFiltersApplied}
//     >
//       <div className="max-w-6xl mx-auto space-y-6 p-4">
//         <div className="flex justify-between items-center">
//           <h1 className="text-2xl font-bold">Restaurants on Your Route</h1>
//           <Button variant="outline">View on Map</Button>
//         </div>

//         <div className="flex w-full items-center gap-2">
//           <div className="relative flex-1">
//             <Input
//               className="pr-10"
//               placeholder="Search restaurants by name, cuisine, or location..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && handleSearch()}
//             />
//             <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
//               <Search className="h-4 w-4" />
//             </div>
//           </div>
//           <Button onClick={handleSearch}>
//             <Search className="mr-2 h-4 w-4" />
//             Search
//           </Button>
//         </div>

//         <div className="relative">
//           <div className="flex justify-end mb-2">
//             {!showAll && filteredRestaurants.length > 4 && (
//               <Button
//                 variant="link"
//                 onClick={handleViewAll}
//                 className="text-blue-600 hover:text-blue-800"
//               >
//                 View All ({filteredRestaurants.length})
//               </Button>
//             )}
//             {showAll && (
//               <Button
//                 variant="link"
//                 onClick={handleViewLess}
//                 className="text-blue-600 hover:text-blue-800"
//               >
//                 View Less
//               </Button>
//             )}
//           </div>

//           <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//             {visibleRestaurants.map((restaurant) => (
//               <RestaurantCard
//                 key={restaurant.place_id}
//                 name={restaurant.name}
//                 address={restaurant.address}
//                 rating={restaurant.rating}
//                 distance_to_road={restaurant.distance_to_road}
//                 travel_time={restaurant.travel_time}
//                 total_traffic_status={restaurant.total_traffic_status}
//                 total_traffic_minutes={restaurant.total_traffic_minutes}
//                 internal_traffic_status={restaurant.internal_traffic_status}
//                 internal_traffic_value={restaurant.internal_traffic_value}
//                 road={restaurant.road}
//                 place_id={restaurant.place_id}
//                 onDetailsClick={handleViewDetails}
//               />
//             ))}
//           </div>

//           {filteredRestaurants.length === 0 && (
//             <div className="text-center py-8">
//               <p className="text-muted-foreground">
//                 No restaurants found matching your criteria
//               </p>
//               <Button
//                 variant="outline"
//                 className="mt-4"
//                 onClick={() => {
//                   setFilteredRestaurants(restaurants);
//                   setVisibleRestaurants(restaurants.slice(0, 4)); // Reset to 4
//                   setSearchQuery("");
//                 }}
//               >
//                 Clear Filters
//               </Button>
//             </div>
//           )}
//         </div>
//       </div>
//     </MainLayout>
//   );
// };

// export default Restaurants;


// PERFECT



// import { useState, useEffect } from "react";
// import { Star, MapPin, Clock, Search } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import MainLayout from "@/components/MainLayout";
// import RestaurantCard from "@/components/RestaurantCard";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useToast } from "@/hooks/use-toast";

// const Restaurants = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userName, setUserName] = useState("");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [restaurants, setRestaurants] = useState([]);
//   const [filteredRestaurants, setFilteredRestaurants] = useState([]);
//   const [visibleRestaurants, setVisibleRestaurants] = useState([]);
//   const [showAll, setShowAll] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { toast } = useToast();

//   useEffect(() => {
//     const loginStatus = localStorage.getItem("isLoggedIn");
//     const name = localStorage.getItem("userName");

//     if (loginStatus !== "true" || !name) {
//       toast({
//         title: "Authentication Required",
//         description: "Please login to view restaurants",
//         variant: "destructive",
//       });
//       navigate("/auth");
//       return;
//     }

//     setIsLoggedIn(true);
//     setUserName(name);

//     if (location.state?.restaurants) {
//       const initialRestaurants = location.state.restaurants;
//       setRestaurants(initialRestaurants);
//       setFilteredRestaurants(initialRestaurants);
//       setVisibleRestaurants(initialRestaurants.slice(0, 4)); // 4 initially (change to 3 if preferred)
//     }
//   }, [navigate, toast, location.state?.restaurants]);

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     localStorage.removeItem("isLoggedIn");
//     localStorage.removeItem("userName");
//     localStorage.removeItem("token");
//     toast({
//       title: "Logged Out",
//       description: "You have been successfully logged out",
//     });
//     navigate("/");
//   };

//   const handleSearch = () => {
//     if (!searchQuery.trim()) {
//       setFilteredRestaurants(restaurants);
//       setVisibleRestaurants(restaurants.slice(0, 4)); // Reset to 4
//       setShowAll(false);
//       return;
//     }

//     const filtered = restaurants.filter(
//       (r) =>
//         r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         r.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         (r.road && r.road.toLowerCase().includes(searchQuery.toLowerCase()))
//     );

//     setFilteredRestaurants(filtered);
//     setVisibleRestaurants(filtered.slice(0, 4)); // 4 after search
//     setShowAll(false);

//     toast({
//       title: filtered.length > 0 ? "Search Results" : "No Results Found",
//       description:
//         filtered.length > 0
//           ? `Found ${filtered.length} restaurants matching '${searchQuery}'`
//           : `No restaurants found for '${searchQuery}'`,
//     });
//   };

//   const handleViewAll = () => {
//     setVisibleRestaurants(filteredRestaurants.slice(0, 60)); // Show all 60
//     setShowAll(true);
//   };

//   const handleViewLess = () => {
//     setVisibleRestaurants(filteredRestaurants.slice(0, 4)); // Back to 4
//     setShowAll(false);
//   };

//   const handleFiltersApplied = (filters: any) => {
//     let results = [...restaurants];

//     if (filters.minRating > 0) {
//       results = results.filter(
//         (r) =>
//           r.rating !== "Not rated" && parseFloat(r.rating) >= filters.minRating
//       );
//     }

//     if (filters.maxTrafficTime < 60) {
//       results = results.filter(
//         (r) => r.total_traffic_minutes <= filters.maxTrafficTime
//       );
//     }

//     if (filters.foodCategory) {
//       results = results.filter(
//         (r) =>
//           r.name.toLowerCase().includes(filters.foodCategory.toLowerCase()) ||
//           (r.cuisineType &&
//             r.cuisineType
//               .toLowerCase()
//               .includes(filters.foodCategory.toLowerCase()))
//       );
//     }

//     if (filters.cuisineType) {
//       results = results.filter(
//         (r) =>
//           r.cuisineType &&
//           r.cuisineType.toLowerCase() === filters.cuisineType.toLowerCase()
//       );
//     }

//     if (filters.sortOption === "traffic") {
//       results.sort((a, b) => a.total_traffic_minutes - b.total_traffic_minutes);
//     } else {
//       results.sort((a, b) => {
//         const ratingA = a.rating === "Not rated" ? 0 : parseFloat(a.rating);
//         const ratingB = b.rating === "Not rated" ? 0 : parseFloat(b.rating);
//         return ratingB - ratingA;
//       });
//     }

//     setFilteredRestaurants(results);
//     setVisibleRestaurants(results.slice(0, 4)); // 4 after filters
//     setShowAll(false);

//     toast({
//       title: "Filters Applied",
//       description: `Showing ${results.length} matching restaurants`,
//     });
//   };

//   const handleViewDetails = (place_id: string) => {
//     console.log("View details for place:", place_id);
//   };

//   return (
//     <MainLayout
//       isLoggedIn={isLoggedIn}
//       userName={userName}
//       onLogout={handleLogout}
//       onFiltersApplied={handleFiltersApplied}
//     >
//       <div className="max-w-6xl mx-auto space-y-6 p-4">
//         <div className="flex justify-between items-center">
//           <h1 className="text-2xl font-bold">Restaurants on Your Route</h1>
//           <Button variant="outline">View on Map</Button>
//         </div>

//         <div className="flex w-full items-center gap-2">
//           <div className="relative flex-1">
//             <Input
//               className="pr-10"
//               placeholder="Search restaurants by name, cuisine, or location..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && handleSearch()}
//             />
//             <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
//               <Search className="h-4 w-4" />
//             </div>
//           </div>
//           <Button onClick={handleSearch}>
//             <Search className="mr-2 h-4 w-4" />
//             Search
//           </Button>
//         </div>

//         <div className="relative">
//           <div className="flex justify-end mb-2">
//             {!showAll && filteredRestaurants.length > 4 && (
//               <Button
//                 variant="link"
//                 onClick={handleViewAll}
//                 className="text-blue-600 hover:text-blue-800"
//               >
//                 View All ({filteredRestaurants.length})
//               </Button>
//             )}
//             {showAll && (
//               <Button
//                 variant="link"
//                 onClick={handleViewLess}
//                 className="text-blue-600 hover:text-blue-800"
//               >
//                 View Less
//               </Button>
//             )}
//           </div>

//           <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//             {visibleRestaurants.map((restaurant) => (
//               <RestaurantCard
//                 key={restaurant.place_id}
//                 name={restaurant.name}
//                 address={restaurant.address}
//                 rating={restaurant.rating}
//                 distance_to_road={restaurant.distance_to_road}
//                 travel_time={restaurant.travel_time}
//                 total_traffic_status={restaurant.total_traffic_status}
//                 total_traffic_minutes={restaurant.total_traffic_minutes}
//                 internal_traffic_status={restaurant.internal_traffic_status}
//                 internal_traffic_value={restaurant.internal_traffic_value}
//                 road={restaurant.road}
//                 place_id={restaurant.place_id}
//                 onDetailsClick={handleViewDetails}
//               />
//             ))}
//           </div>

//           {filteredRestaurants.length === 0 && (
//             <div className="text-center py-8">
//               <p className="text-muted-foreground">
//                 No restaurants found matching your criteria
//               </p>
//               <Button
//                 variant="outline"
//                 className="mt-4"
//                 onClick={() => {
//                   setFilteredRestaurants(restaurants);
//                   setVisibleRestaurants(restaurants.slice(0, 4)); // Reset to 4
//                   setSearchQuery("");
//                 }}
//               >
//                 Clear Filters
//               </Button>
//             </div>
//           )}
//         </div>
//       </div>
//     </MainLayout>
//   );
// };

// export default Restaurants;




// import { useState, useEffect } from "react";
// import { Search } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import MainLayout from "@/components/MainLayout";
// import RestaurantCard from "@/components/RestaurantCard";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useToast } from "@/hooks/use-toast";

// const Restaurants = () => {
//   const [restaurants, setRestaurants] = useState([]);
//   const [filteredRestaurants, setFilteredRestaurants] = useState([]);
//   const [visibleRestaurants, setVisibleRestaurants] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [showAll, setShowAll] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
//   const [userName, setUserName] = useState<string>('');
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { toast } = useToast();

//   useEffect(() => {
//     const checkAuthStatus = () => {
//       const token = localStorage.getItem('token');
//       const name = localStorage.getItem('userName');
//       const loginStatus = localStorage.getItem('isLoggedIn');
//       return token && name && loginStatus === 'true';
//     };

//     const authStatus = checkAuthStatus();
//     if (authStatus) {
//       setIsLoggedIn(true);
//       setUserName(localStorage.getItem('userName') || 'User');
//     } else {
//       setIsLoggedIn(false);
//       setUserName('');
//     }

//     if (location.state?.isLoggedIn) {
//       setIsLoggedIn(true);
//       const newUserName = location.state.userName || 'User';
//       setUserName(newUserName);
//       localStorage.setItem('isLoggedIn', 'true');
//       localStorage.setItem('userName', newUserName);
//     }

//     const incomingRestaurants = location.state?.restaurants || [];
//     console.log("Received from navigation:", incomingRestaurants.length, incomingRestaurants);

//     if (!Array.isArray(incomingRestaurants) || incomingRestaurants.length === 0) {
//       toast({ title: "No Restaurants", description: "No data received", variant: "destructive" });
//       navigate("/");
//       return;
//     }

//     setRestaurants(incomingRestaurants);
//     setFilteredRestaurants(incomingRestaurants);
//     const initialCount = Math.min(20, incomingRestaurants.length);
//     setVisibleRestaurants(incomingRestaurants.slice(0, initialCount));
//     console.log("Initial restaurants set:", initialCount, incomingRestaurants.slice(0, initialCount));
//   }, [location.state, navigate, toast]);

//   const handleLogout = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       localStorage.removeItem('token');
//       localStorage.removeItem('userEmail');
//       localStorage.removeItem('userName');
//       localStorage.removeItem('isLoggedIn');
//       setIsLoggedIn(false);
//       setUserName('');

//       if (token) {
//         await fetch("http://localhost:8000/api/logout/", {
//           method: "POST",
//           headers: {
//             "Authorization": `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         });
//       }

//       navigate('/', { replace: true });
//       toast({
//         title: "Logged Out",
//         description: "You have been successfully logged out",
//       });
//     } catch (error) {
//       toast({
//         title: "Logout Failed",
//         description: "There was an error logging out",
//         variant: "destructive",
//       });
//     }
//   };

//   const handleSearch = () => {
//     const filtered = restaurants.filter(r =>
//       r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       r.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       (r.road && r.road.toLowerCase().includes(searchQuery.toLowerCase()))
//     );
//     setFilteredRestaurants(filtered);
//     setVisibleRestaurants(filtered.slice(0, Math.min(20, filtered.length)));
//     setShowAll(false);
//   };

//   const handleViewAll = () => {
//     setVisibleRestaurants(filteredRestaurants);
//     setShowAll(true);
//     console.log("Showing all:", filteredRestaurants.length);
//   };

//   const handleViewLess = () => {
//     setVisibleRestaurants(filteredRestaurants.slice(0, Math.min(20, filteredRestaurants.length)));
//     setShowAll(false);
//   };

//   return (
//     <MainLayout 
//       isLoggedIn={isLoggedIn} 
//       userName={userName} 
//       onLogout={handleLogout}
//     >
//       <div className="max-w-6xl mx-auto space-y-6 p-4">
//         <h1 className="text-2xl font-bold">Restaurants on Your Route</h1>
//         <div className="flex gap-2">
//           <Input
//             placeholder="Search restaurants..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && handleSearch()}
//           />
//           <Button onClick={handleSearch}><Search /> Search</Button>
//         </div>

//         <div>
//           <div className="flex justify-end mb-2">
//             {filteredRestaurants.length > 20 && !showAll && (
//               <Button variant="link" onClick={handleViewAll}>
//                 View All ({filteredRestaurants.length})
//               </Button>
//             )}
//             {showAll && filteredRestaurants.length > 20 && (
//               <Button variant="link" onClick={handleViewLess}>
//                 View Less
//               </Button>
//             )}
//           </div>

//           <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//             {visibleRestaurants.map(r => (
//               <RestaurantCard
//                 key={r.place_id}
//                 name={r.name}
//                 address={r.address}
//                 rating={r.rating}
//                 distance_to_road={r.distance_to_road}
//                 travel_time={r.travel_time}
//                 total_traffic_status={r.total_traffic_status}
//                 total_traffic_minutes={r.total_traffic_minutes}
//                 internal_traffic_status={r.internal_traffic_status}
//                 internal_traffic_value={r.internal_traffic_value}
//                 road={r.road}
//                 place_id={r.place_id}
//                 onDetailsClick={() => console.log(r.place_id)}
//               />
//             ))}
//             {visibleRestaurants.length === 0 && <p>No restaurants found</p>}
//           </div>
//         </div>
//       </div>
//     </MainLayout>
//   );
// };

// export default Restaurants;


//perfect



import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MainLayout from "@/components/MainLayout";
import RestaurantCard from "@/components/RestaurantCard";
import { useNavigate, useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [visibleRestaurants, setVisibleRestaurants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    const checkAuthStatus = () => {
      const token = localStorage.getItem('token');
      const name = localStorage.getItem('userName');
      const loginStatus = localStorage.getItem('isLoggedIn');
      return token && name && loginStatus === 'true';
    };

    const authStatus = checkAuthStatus();
    if (authStatus) {
      setIsLoggedIn(true);
      setUserName(localStorage.getItem('userName') || 'User');
    } else {
      setIsLoggedIn(false);
      setUserName('');
    }

    if (location.state?.isLoggedIn) {
      setIsLoggedIn(true);
      const newUserName = location.state.userName || 'User';
      setUserName(newUserName);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userName', newUserName);
    }

    const incomingRestaurants = location.state?.restaurants || [];
    console.log("Received from navigation:", incomingRestaurants.length, incomingRestaurants);

    if (!Array.isArray(incomingRestaurants) || incomingRestaurants.length === 0) {
      toast({ title: "No Restaurants", description: "No data received", variant: "destructive" });
      navigate("/");
      return;
    }

  //   setRestaurants(incomingRestaurants);
  //   setFilteredRestaurants(incomingRestaurants);
  //   const initialCount = Math.min(20, incomingRestaurants.length);
  //   setVisibleRestaurants(incomingRestaurants.slice(0, initialCount));
  //   console.log("Initial restaurants set:", initialCount, incomingRestaurants.slice(0, initialCount));
  // }, [location.state, navigate, toast]);

  setRestaurants(incomingRestaurants);
    setFilteredRestaurants(incomingRestaurants);
    const initialCount = Math.min(20, incomingRestaurants.length);
    setVisibleRestaurants(incomingRestaurants.slice(0, initialCount));
    console.log("Initial restaurants set:", initialCount, incomingRestaurants.slice(0, initialCount));
    console.log("Restaurants state:", incomingRestaurants.length);
    console.log("Filtered restaurants state:", incomingRestaurants.length);
    console.log("Visible restaurants state:", initialCount);
  }, [location.state, navigate, toast]);


  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      localStorage.removeItem('token');
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userName');
      localStorage.removeItem('isLoggedIn');
      setIsLoggedIn(false);
      setUserName('');

      if (token) {
        await fetch("http://localhost:8000/api/logout/", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
      }

      navigate('/', { replace: true });
      toast({
        title: "Logged Out",
        description: "You have been successfully logged out",
      });
    } catch (error) {
      toast({
        title: "Logout Failed",
        description: "There was an error logging out",
        variant: "destructive",
      });
    }
  };

  const handleSearch = () => {
    const filtered = restaurants.filter(r =>
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (r.road && r.road.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    setFilteredRestaurants(filtered);
    setVisibleRestaurants(filtered.slice(0, Math.min(20, filtered.length)));
    setShowAll(false);
    console.log("Filtered restaurants after search:", filtered.length);
  };

  const handleViewAll = () => {
    setVisibleRestaurants(filteredRestaurants);
    setShowAll(true);
    console.log("Showing all:", filteredRestaurants.length);
  };

  const handleViewLess = () => {
    setVisibleRestaurants(filteredRestaurants.slice(0, Math.min(20, filteredRestaurants.length)));
    setShowAll(false);
  };

  return (
    <MainLayout 
      isLoggedIn={isLoggedIn} 
      userName={userName} 
      onLogout={handleLogout}
    >
      <div className="max-w-6xl mx-auto space-y-6 p-4">
        <h1 className="text-2xl font-bold">Restaurants on Your Route</h1>
        <div className="space-y-2">
          <div className="flex gap-2">
            <Input
              placeholder="Search restaurants..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <Button onClick={handleSearch}><Search /> Search</Button>
          </div>
          {/* Add View All/View Less buttons here */}
          <div className="flex justify-end space-x-2">
            {filteredRestaurants.length > 10 && !showAll && (
              <Button variant="outline" onClick={handleViewAll} className="text-orange-500 border-orange-500" >
                View All ({filteredRestaurants.length})
              </Button>
            )}
            {showAll && filteredRestaurants.length > 10 && (
              <Button variant="outline" onClick={handleViewLess} className="text-orange-500 border-orange-500">
                View Less
              </Button>
            )}
          </div>
        </div>

        <div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {visibleRestaurants.map(r => (
              <RestaurantCard
                key={r.place_id}
                name={r.name}
                address={r.address}
                rating={r.rating}
                distance_to_road={r.distance_to_road}
                travel_time={r.travel_time}
                total_traffic_status={r.total_traffic_status}
                total_traffic_minutes={r.total_traffic_minutes}
                internal_traffic_status={r.internal_traffic_status}
                internal_traffic_value={r.internal_traffic_value}
                road={r.road}
                place_id={r.place_id}
                onDetailsClick={() => console.log(r.place_id)}
              />
            ))}
            {visibleRestaurants.length === 0 && <p>No restaurants found</p>}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Restaurants;