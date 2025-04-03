import { Filter, History, ChevronDown, Save, Check } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { useToast } from '@/hooks/use-toast';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';

interface AppSidebarProps {
  isLoggedIn: boolean;
  onFiltersApplied?: (filters: any) => void;
}

const AppSidebar = ({ isLoggedIn, onFiltersApplied }: AppSidebarProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // State for filter values
  const [sortOption, setSortOption] = useState('rating');
  const [foodCategory, setFoodCategory] = useState('');
  const [cuisineType, setCuisineType] = useState('');
  const [minRating, setMinRating] = useState(3);
  const [maxTrafficTime, setMaxTrafficTime] = useState(30);
  const [priceRange, setPriceRange] = useState([300, 800]);
  const [vegetarianOnly, setVegetarianOnly] = useState(false);
  const [openNow, setOpenNow] = useState(true);
  const [deliveryAvailable, setDeliveryAvailable] = useState(false);

  const handleRestrictedAction = () => {
    if (!isLoggedIn) {
      toast({
        title: "Login Required",
        description: "Please login to access this feature",
        variant: "destructive",
      });
      navigate('/auth');
    }
  };

  const handleSaveFilters = () => {
    toast({
      title: "Filters Saved",
      description: "Your filter preferences have been saved",
    });
  };

  const handleApplyFilters = async () => {
    try {
      const filters = {
        sortOption,
        foodCategory,
        cuisineType,
        minRating,
        maxTrafficTime,
        priceRange,
        vegetarianOnly,
        openNow,
        deliveryAvailable
      };

      if (onFiltersApplied) {
        onFiltersApplied(filters);
      }

      toast({
        title: "Filters Applied",
        description: "Restaurants have been filtered according to your preferences",
      });
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to apply filters",
        variant: "destructive",
      });
    }
  };

  return (
    <Sidebar className="mt-16 pt-0">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Options</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <Popover>
                  <PopoverTrigger asChild>
                    <SidebarMenuButton onClick={handleRestrictedAction} tooltip="Filter restaurants">
                      <Filter />
                      <span>Filters</span>
                    </SidebarMenuButton>
                  </PopoverTrigger>
                  {isLoggedIn && (
                    <PopoverContent 
                      side="right" 
                      align="start" 
                      className="w-80 p-4 max-h-[80vh] overflow-y-auto" // Added max-h-[80vh] and overflow-y-auto
                    >
                      <div className="space-y-6">
                        <div className="space-y-4">
                          <h3 className="text-sm font-medium">Sort By</h3>
                          <Select 
                            value={sortOption}
                            onValueChange={(value) => setSortOption(value)}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select sorting option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Sorting Options</SelectLabel>
                                <SelectItem value="rating">Sort by Rating</SelectItem>
                                <SelectItem value="traffic">Sort by Traffic</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-sm font-medium">Food Specific</h3>
                          <Select 
                            value={foodCategory}
                            onValueChange={(value) => setFoodCategory(value)}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select food category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Food Categories</SelectLabel>
                                <SelectItem value="biryani">Biryani</SelectItem>
                                <SelectItem value="combo">Combo Meals</SelectItem>
                                <SelectItem value="desserts">Desserts</SelectItem>
                                <SelectItem value="burgers">Burgers</SelectItem>
                                <SelectItem value="pizza">Pizza</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-sm font-medium">Type of Food</h3>
                          <Select 
                            value={cuisineType}
                            onValueChange={(value) => setCuisineType(value)}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select cuisine" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Cuisine Types</SelectLabel>
                                <SelectItem value="indian">Indian</SelectItem>
                                <SelectItem value="chinese">Chinese</SelectItem>
                                <SelectItem value="mughlai">Mughlai</SelectItem>
                                <SelectItem value="italian">Italian</SelectItem>
                                <SelectItem value="mexican">Mexican</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-sm font-medium">Minimum Rating</h3>
                          <div className="flex flex-col space-y-2">
                            <Slider 
                              value={[minRating]}
                              min={1} 
                              max={5} 
                              step={0.5} 
                              onValueChange={(value) => setMinRating(value[0])}
                            />
                            <div className="flex justify-between text-xs text-muted-foreground">
                              <span>1</span>
                              <span>3</span>
                              <span>5</span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-sm font-medium">Traffic Time Constraint (minutes)</h3>
                          <div className="flex flex-col space-y-2">
                            <Slider 
                              value={[maxTrafficTime]}
                              min={5} 
                              max={60} 
                              step={5} 
                              onValueChange={(value) => setMaxTrafficTime(value[0])}
                            />
                            <div className="flex justify-between text-xs text-muted-foreground">
                              <span>5</span>
                              <span>30</span>
                              <span>60</span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-sm font-medium">Estimated Price Range</h3>
                          <div className="flex flex-col space-y-2">
                            <Slider 
                              value={priceRange}
                              min={100} 
                              max={2000} 
                              step={100} 
                              onValueChange={(value) => setPriceRange(value)}
                            />
                            <div className="flex justify-between text-xs text-muted-foreground">
                              <span>$</span>
                              <span>$$</span>
                              <span>$$$</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <Label htmlFor="veg">Vegetarian Only</Label>
                          <Switch 
                            id="veg" 
                            checked={vegetarianOnly}
                            onCheckedChange={setVegetarianOnly}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="open">Open Now</Label>
                          <Switch 
                            id="open" 
                            checked={openNow}
                            onCheckedChange={setOpenNow}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="delivery">Delivery Available</Label>
                          <Switch 
                            id="delivery" 
                            checked={deliveryAvailable}
                            onCheckedChange={setDeliveryAvailable}
                          />
                        </div>

                        <div className="pt-4 flex gap-2">
                          <Button 
                            onClick={handleSaveFilters} 
                            className="w-full flex items-center justify-center gap-2"
                            variant="outline"
                          >
                            <Save className="h-4 w-4" />
                            Save Filters
                          </Button>
                          <Button 
                            onClick={handleApplyFilters} 
                            className="w-full flex items-center justify-center gap-2"
                          >
                            <Check className="h-4 w-4" />
                            Apply Filters
                          </Button>
                        </div>
                      </div>
                    </PopoverContent>
                  )}
                </Popover>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <Popover>
                  <PopoverTrigger asChild>
                    <SidebarMenuButton onClick={handleRestrictedAction} tooltip="View history">
                      <History />
                      <span>History</span>
                    </SidebarMenuButton>
                  </PopoverTrigger>
                  {isLoggedIn && (
                    <PopoverContent side="right" align="start" className="w-64 p-4">
                      <p className="text-sm text-muted-foreground">Your recent searches will appear here</p>
                    </PopoverContent>
                  )}
                </Popover>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;