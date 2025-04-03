
// // // // import { Star, MapPin, Clock } from 'lucide-react';
// // // // import { Button } from '@/components/ui/button';


// // // // const RestaurantCard = () => {
// // // //   return (
// // // //     <div className="rounded-lg border bg-card text-card-foreground shadow">
// // // //       <div className="relative h-48">
// // // //         <img
// // // //           src="https://source.unsplash.com/random/400x300/?restaurant"
// // // //           alt="Restaurant"
// // // //           className="w-full h-full object-cover rounded-t-lg"
// // // //         />
// // // //         <div className="absolute top-2 right-2 bg-background/90 px-2 py-1 rounded-full text-sm flex items-center gap-1">
// // // //           <Star className="h-4 w-4 text-yellow-400" />
// // // //           <span>4.5</span>
// // // //         </div>
// // // //       </div>
      
// // // //       <div className="p-4 space-y-3">
// // // //         <h3 className="text-lg font-semibold">Restaurant Name</h3>
        
// // // //         <div className="space-y-2 text-sm text-muted-foreground">
// // // //           <div className="flex items-center gap-2">
// // // //             <MapPin className="h-4 w-4" />
// // // //             <span>2.5 km away</span>
// // // //           </div>
// // // //           <div className="flex items-center gap-2">
// // // //             <Clock className="h-4 w-4" />
// // // //             <span>~15 min travel time</span>
// // // //           </div>
// // // //         </div>
        
// // // //         <div className="pt-3 flex items-center justify-between">
// // // //           <span className="text-sm">Traffic: Low</span>
// // // //           <Button size="sm">View Details</Button>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default RestaurantCard;


// // // import { Star, MapPin, Clock } from 'lucide-react';
// // // import { Button } from '@/components/ui/button';

// // // interface RestaurantCardProps {
// // //   name: string;
// // //   address: string;
// // //   rating: string | number; // Can be "Not rated" or a number
// // //   distance_to_road: number; // Distance in meters
// // //   travel_time: string; // Travel time text (e.g., "15 mins")
// // //   total_traffic_status: string; // "LOW", "MEDIUM", "HIGH"
// // //   place_id: string; // Unique identifier for potential future use (e.g., details page)
// // // }

// // // const RestaurantCard = ({
// // //   name,
// // //   address,
// // //   rating,
// // //   distance_to_road,
// // //   travel_time,
// // //   total_traffic_status,
// // //   place_id,
// // // }: RestaurantCardProps) => {
// // //   // Determine traffic color based on status
// // //   const getTrafficColor = (status: string) => {
// // //     switch (status.toUpperCase()) {
// // //       case 'LOW':
// // //         return 'text-green-500';
// // //       case 'MEDIUM':
// // //         return 'text-yellow-500';
// // //       case 'HIGH':
// // //         return 'text-red-500';
// // //       default:
// // //         return 'text-gray-500';
// // //     }
// // //   };

// // //   return (
// // //     <div className="rounded-lg border bg-card text-card-foreground shadow hover:shadow-lg transition-shadow">
// // //       <div className="relative h-48">
// // //         <img
// // //           src={`https://source.unsplash.com/random/400x300/?restaurant,${name}`} // Dynamic image based on name
// // //           alt={name}
// // //           className="w-full h-full object-cover rounded-t-lg"
// // //         />
// // //         <div className="absolute top-2 right-2 bg-background/90 px-2 py-1 rounded-full text-sm flex items-center gap-1">
// // //           <Star className="h-4 w-4 text-yellow-400" />
// // //           <span>{rating}</span>
// // //         </div>
// // //       </div>

// // //       <div className="p-4 space-y-3">
// // //         <h3 className="text-lg font-semibold">{name}</h3>

// // //         <div className="space-y-2 text-sm text-muted-foreground">
// // //           <div className="flex items-center gap-2">
// // //             <MapPin className="h-4 w-4" />
// // //             <span>{address}</span>
// // //           </div>
// // //           <div className="flex items-center gap-2">
// // //             <MapPin className="h-4 w-4" />
// // //             <span>{distance_to_road} meters from main road</span>
// // //           </div>
// // //           <div className="flex items-center gap-2">
// // //             <Clock className="h-4 w-4" />
// // //             <span>{travel_time}</span>
// // //           </div>
// // //         </div>

// // //         <div className="pt-3 flex items-center justify-between">
// // //           <span className={`text-sm ${getTrafficColor(total_traffic_status)}`}>
// // //             Traffic: {total_traffic_status}
// // //           </span>
// // //           <Button size="sm" onClick={() => console.log(`View details for ${place_id}`)}>
// // //             View Details
// // //           </Button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default RestaurantCard;



// // // import { Star, MapPin, Clock } from 'lucide-react';
// // // import { Button } from '@/components/ui/button';

// // // interface RestaurantCardProps {
// // //   name: string;
// // //   address: string;
// // //   rating: string | number; // Can be "Not rated" or a number
// // //   distance_to_road: number; // Distance in meters
// // //   travel_time: string; // Travel time text (e.g., "15 mins")
// // //   total_traffic_status: string; // "LOW", "MEDIUM", "HIGH"
// // //   place_id: string; // Unique identifier for potential future use (e.g., details page)
// // // }

// // // const RestaurantCard = ({
// // //   name,
// // //   address,
// // //   rating,
// // //   distance_to_road,
// // //   travel_time,
// // //   total_traffic_status,
// // //   place_id,
// // // }: RestaurantCardProps) => {
// // //   // Determine traffic color based on status
// // //   const getTrafficColor = (status: string) => {
// // //     if (!status) return 'bg-gray-500'; 
// // //     switch (status.toUpperCase()) {
// // //       case 'LOW':
// // //         return 'text-green-500';
// // //       case 'MEDIUM':
// // //         return 'text-yellow-500';
// // //       case 'HIGH':
// // //         return 'text-red-500';
// // //       default:
// // //         return 'text-gray-500';
// // //     }
// // //   };

// // //   return (
// // //     <div className="rounded-lg border bg-card text-card-foreground shadow hover:shadow-lg transition-shadow">
// // //       <div className="relative h-48">
// // //         <img
// // //           src={`https://source.unsplash.com/random/400x300/?restaurant,${name}`} // Dynamic image based on name
// // //           alt={name}
// // //           className="w-full h-full object-cover rounded-t-lg"
// // //         />
// // //         <div className="absolute top-2 right-2 bg-background/90 px-2 py-1 rounded-full text-sm flex items-center gap-1">
// // //           <Star className="h-4 w-4 text-yellow-400" />
// // //           <span>{rating}</span>
// // //         </div>
// // //       </div>

// // //       <div className="p-4 space-y-3">
// // //         <h3 className="text-lg font-semibold">{name}</h3>

// // //         <div className="space-y-2 text-sm text-muted-foreground">
// // //           <div className="flex items-center gap-2">
// // //             <MapPin className="h-4 w-4" />
// // //             <span>{address}</span>
// // //           </div>
// // //           <div className="flex items-center gap-2">
// // //             <MapPin className="h-4 w-4" />
// // //             <span>{distance_to_road} meters from main road</span>
// // //           </div>
// // //           <div className="flex items-center gap-2">
// // //             <Clock className="h-4 w-4" />
// // //             <span>{travel_time}</span>
// // //           </div>
// // //         </div>

// // //         <div className="pt-3 flex items-center justify-between">
// // //           <span className={`text-sm ${getTrafficColor(total_traffic_status)}`}>
// // //             Traffic: {total_traffic_status}
// // //           </span>
// // //           <Button size="sm" onClick={() => console.log(`View details for ${place_id}`)}>
// // //             View Details
// // //           </Button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default RestaurantCard;



// // import { Star, MapPin, Clock } from 'lucide-react';
// // import { Button } from '@/components/ui/button';

// // interface RestaurantCardProps {
// //   name: string;
// //   address: string;
// //   rating: string | number;
// //   distance_to_road?: number;
// //   travel_time?: string;
// //   total_traffic_status?: string;
// //   total_traffic_minutes?: number;
// //   internal_traffic_status?: string;
// //   internal_traffic_value?: number;
// //   road?: string;
// //   place_id: string;
// //   isFiltered?: boolean;
// // }

// // const RestaurantCard = ({
// //   name,
// //   address,
// //   rating = 'Not rated',
// //   distance_to_road = 0,
// //   travel_time = 'N/A',
// //   total_traffic_status = 'UNKNOWN',
// //   total_traffic_minutes = 0,
// //   internal_traffic_status = 'UNKNOWN',
// //   internal_traffic_value = 0,
// //   road = 'Main road',
// //   place_id,
// // }: RestaurantCardProps) => {
// //   // Determine traffic color based on status
// //   const getTrafficColor = (status?: string) => {
// //     if (!status) return 'text-gray-500';
// //     switch (status.toUpperCase()) {
// //       case 'LOW':
// //         return 'text-green-500';
// //       case 'MEDIUM':
// //       case 'MODERATE': // Handle both terms
// //         return 'text-yellow-500';
// //       case 'HIGH':
// //         return 'text-red-500';
// //       default:
// //         return 'text-gray-500';
// //     }
// //   };

// //   // Format distance for display
// //   const formatDistance = (meters: number) => {
// //     if (meters >= 1000) return `${(meters / 1000).toFixed(1)} km`;
// //     return `${meters} m`;
// //   };

// //   return (
// //     <div className="rounded-lg border bg-card text-card-foreground shadow hover:shadow-lg transition-shadow">
// //       <div className="relative h-48">
// //         <img
// //           src={`https://source.unsplash.com/random/400x300/?restaurant,${encodeURIComponent(name)}`}
// //           alt={name}
// //           className="w-full h-full object-cover rounded-t-lg"
// //           onError={(e) => {
// //             (e.target as HTMLImageElement).src = 'https://source.unsplash.com/random/400x300/?restaurant';
// //           }}
// //         />
// //         <div className="absolute top-2 right-2 bg-background/90 px-2 py-1 rounded-full text-sm flex items-center gap-1">
// //           <Star className="h-4 w-4 text-yellow-400" />
// //           <span>{rating}</span>
// //         </div>
// //       </div>

// //       <div className="p-4 space-y-3">
// //         <h3 className="text-lg font-semibold line-clamp-1" title={name}>
// //           {name}
// //         </h3>

// //         <div className="space-y-2 text-sm text-muted-foreground">
// //           <div className="flex items-center gap-2">
// //             <MapPin className="h-4 w-4 flex-shrink-0" />
// //             <span className="line-clamp-1" title={address}>
// //               {address}
// //             </span>
// //           </div>
// //           <div className="flex items-center gap-2">
// //             <MapPin className="h-4 w-4 flex-shrink-0" />
// //             <span>{formatDistance(distance_to_road)} from {road}</span>
// //           </div>
// //           <div className="flex items-center gap-2">
// //             <Clock className="h-4 w-4 flex-shrink-0" />
// //             <span>~{travel_time} ({total_traffic_minutes} min with traffic)</span>
// //           </div>
// //         </div>

// //         <div className="pt-3 flex items-center justify-between">
// //           <div className="flex items-center gap-2">
// //             <span className={`text-sm ${getTrafficColor(total_traffic_status)}`}>
// //               Route traffic: {total_traffic_status}
// //             </span>
// //             {internal_traffic_status && (
// //               <span className={`text-xs ${getTrafficColor(internal_traffic_status)}`}>
// //                 (Local: {internal_traffic_status})
// //               </span>
// //             )}
// //           </div>
// //           <Button 
// //             size="sm" 
// //             onClick={() => console.log(`View details for ${place_id}`)}
// //             variant="outline"
// //           >
// //             Details
// //           </Button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default RestaurantCard;


// import { Star, MapPin, Clock } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// interface RestaurantCardProps {
//   name: string;
//   address: string;
//   rating: string | number;
//   distance_to_road?: number;
//   travel_time?: string;
//   total_traffic_status?: string;
//   total_traffic_minutes?: number;
//   internal_traffic_status?: string;
//   internal_traffic_value?: number;
//   road?: string;
//   place_id: string;
//   isFiltered?: boolean;
//   onDetailsClick?: (place_id: string) => void;
// }

// const RestaurantCard = ({
//   name,
//   address,
//   rating = 'Not rated',
//   distance_to_road = 0,
//   travel_time = 'N/A',
//   total_traffic_status = 'UNKNOWN',
//   total_traffic_minutes = 0,
//   internal_traffic_status = 'UNKNOWN',
//   internal_traffic_value = 0,
//   road = 'Main road',
//   place_id,
//   isFiltered = false,
//   onDetailsClick,
// }: RestaurantCardProps) => {
//   // Determine traffic color based on status
//   const getTrafficColor = (status?: string) => {
//     if (!status) return 'text-gray-500';
//     switch (status.toUpperCase()) {
//       case 'LOW':
//         return 'text-green-500';
//       case 'MEDIUM':
//       case 'MODERATE':
//         return 'text-yellow-500';
//       case 'HIGH':
//         return 'text-red-500';
//       default:
//         return 'text-gray-500';
//     }
//   };

//   // Format distance for display
//   const formatDistance = (meters: number) => {
//     if (meters >= 1000) return `${(meters / 1000).toFixed(1)} km`;
//     return `${meters} m`;
//   };

//   // Format rating display
//   const formatRating = (rating: string | number) => {
//     if (rating === 'Not rated') return rating;
//     return typeof rating === 'number' ? rating.toFixed(1) : rating;
//   };

//   const handleDetailsClick = () => {
//     if (onDetailsClick) {
//       onDetailsClick(place_id);
//     }
//   };

//   return (
//     <div className={`rounded-lg border bg-card text-card-foreground shadow hover:shadow-lg transition-shadow ${isFiltered ? 'ring-2 ring-primary border-primary' : ''}`}>
//       <div className="relative h-48">
//         <img
//           src={`https://source.unsplash.com/random/400x300/?restaurant,${encodeURIComponent(name)}`}
//           alt={name}
//           className="w-full h-full object-cover rounded-t-lg"
//           onError={(e) => {
//             (e.target as HTMLImageElement).src = 'https://source.unsplash.com/random/400x300/?restaurant';
//           }}
//         />
//         <div className="absolute top-2 right-2 bg-background/90 px-2 py-1 rounded-full text-sm flex items-center gap-1">
//           <Star className="h-4 w-4 text-yellow-400" />
//           <span>{formatRating(rating)}</span>
//         </div>
//       </div>

//       <div className="p-4 space-y-3">
//         <h3 className="text-lg font-semibold line-clamp-1" title={name}>
//           {name}
//         </h3>

//         <div className="space-y-2 text-sm text-muted-foreground">
//           <div className="flex items-center gap-2">
//             <MapPin className="h-4 w-4 flex-shrink-0" />
//             <span className="line-clamp-1" title={address}>
//               {address}
//             </span>
//           </div>
//           {distance_to_road !== undefined && (
//             <div className="flex items-center gap-2">
//               <MapPin className="h-4 w-4 flex-shrink-0" />
//               <span>{formatDistance(distance_to_road)} from {road}</span>
//             </div>
//           )}
//           <div className="flex items-center gap-2">
//             <Clock className="h-4 w-4 flex-shrink-0" />
//             <span>~{travel_time} ({total_traffic_minutes} min with traffic)</span>
//           </div>
//         </div>

//         <div className="pt-3 flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <span className={`text-sm ${getTrafficColor(total_traffic_status)}`}>
//               Route traffic: {total_traffic_status}
//             </span>
//             {internal_traffic_status && internal_traffic_status !== 'UNKNOWN' && (
//               <span className={`text-xs ${getTrafficColor(internal_traffic_status)}`}>
//                 (Local: {internal_traffic_status} {internal_traffic_value !== undefined ? `${internal_traffic_value}%` : ''})
//               </span>
//             )}
//           </div>
//           <Button 
//             size="sm" 
//             onClick={handleDetailsClick}
//             variant="outline"
//           >
//             Details
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RestaurantCard;


import { Star, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface RestaurantCardProps {
  name: string;
  address: string;
  rating: string | number;
  distance_to_road?: number;
  travel_time?: string;
  total_traffic_status?: string;
  total_traffic_minutes?: number;
  internal_traffic_status?: string;
  internal_traffic_value?: number;
  road?: string;
  place_id: string;
  isFiltered?: boolean;
  onDetailsClick?: (place_id: string) => void;
}

const RestaurantCard = ({
  name,
  address,
  rating = 'Not rated',
  distance_to_road = 0,
  travel_time = 'N/A',
  total_traffic_status = 'UNKNOWN',
  total_traffic_minutes = 0,
  internal_traffic_status = 'UNKNOWN',
  internal_traffic_value = 0,
  road = 'Main road',
  place_id,
  isFiltered = false,
  onDetailsClick,
}: RestaurantCardProps) => {
  // Determine traffic color based on status
  const getTrafficColor = (status?: string) => {
    if (!status) return 'text-gray-500';
    switch (status.toUpperCase()) {
      case 'LOW':
        return 'text-green-500';
      case 'MEDIUM':
      case 'MODERATE':
        return 'text-yellow-500';
      case 'HIGH':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  // Format distance for display
  const formatDistance = (meters: number) => {
    if (meters >= 1000) return `${(meters / 1000).toFixed(1)} km`;
    return `${meters} m`;
  };

  // Format rating display
  const formatRating = (rating: string | number) => {
    if (rating === 'Not rated') return rating;
    return typeof rating === 'number' ? rating.toFixed(1) : rating;
  };

  // Get restaurant image with fallback
  const getRestaurantImage = () => {
    const baseUrl = 'https://source.unsplash.com/random/400x300/?';
    const tags = ['food', 'restaurant', 'dining', 'meal', 'cuisine'];
    const randomTag = tags[Math.floor(Math.random() * tags.length)];
    return `${baseUrl}${randomTag},${encodeURIComponent(name)}&${Date.now()}`;
  };

  const handleDetailsClick = () => {
    if (onDetailsClick) {
      onDetailsClick(place_id);
    }
  };

  return (
    <div className={`rounded-lg border bg-card text-card-foreground shadow hover:shadow-lg transition-shadow ${isFiltered ? 'ring-2 ring-primary border-primary' : ''}`}>
      <div className="relative h-48">
        <img
          src={getRestaurantImage()}
          alt={name}
          className="w-full h-full object-cover rounded-t-lg"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80';
          }}
        />
        <div className="absolute top-2 right-2 bg-background/90 px-2 py-1 rounded-full text-sm flex items-center gap-1">
          <Star className="h-4 w-4 text-yellow-400" />
          <span>{formatRating(rating)}</span>
        </div>
      </div>

      <div className="p-4 space-y-3">
        <h3 className="text-lg font-semibold line-clamp-1" title={name}>
          {name}
        </h3>

        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 flex-shrink-0" />
            <span className="line-clamp-1" title={address}>
              {address}
            </span>
          </div>
          {distance_to_road !== undefined && (
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 flex-shrink-0" />
              <span>{formatDistance(distance_to_road)} from {road}</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 flex-shrink-0" />
            <span>~{travel_time} ({total_traffic_minutes} min with traffic)</span>
          </div>
        </div>

        <div className="pt-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`text-sm ${getTrafficColor(total_traffic_status)}`}>
              Route traffic: {total_traffic_status}
            </span>
            {internal_traffic_status && internal_traffic_status !== 'UNKNOWN' && (
              <span className={`text-xs ${getTrafficColor(internal_traffic_status)}`}>
                (Local: {internal_traffic_status} {internal_traffic_value !== undefined ? `${internal_traffic_value}%` : ''})
              </span>
            )}
          </div>
          <Button 
            size="sm" 
            onClick={handleDetailsClick}
            variant="outline"
          >
            Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;