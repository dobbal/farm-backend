import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, Trash2 } from "lucide-react";
import { useState } from "react";

interface CropData {
  id: string;
  cropName: string;
  area: string;
  location: string;
}

export default function RegistrationForm() {
  const [crops, setCrops] = useState<CropData[]>([
    { id: "1", cropName: "", area: "", location: "" }
  ]);
  const [consent, setConsent] = useState(false);

  const addCrop = () => {
    setCrops([...crops, { id: Date.now().toString(), cropName: "", area: "", location: "" }]);
    console.log('Added new crop field');
  };

  const removeCrop = (id: string) => {
    if (crops.length > 1) {
      setCrops(crops.filter(crop => crop.id !== id));
      console.log('Removed crop field');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration form submitted', { crops, consent });
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Farmer Registration</CardTitle>
        <p className="text-sm text-muted-foreground">
          Register to receive personalized crop recommendations and updates
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" placeholder="Enter your name" required data-testid="input-name" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="age">Age *</Label>
              <Input id="age" type="number" placeholder="Enter your age" required data-testid="input-age" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="gender">Gender *</Label>
              <Select required>
                <SelectTrigger id="gender" data-testid="select-gender">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input id="phone" type="tel" placeholder="Enter phone number" required data-testid="input-phone" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-base">Crop Details</Label>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addCrop}
                data-testid="button-add-crop"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Crop
              </Button>
            </div>

            {crops.map((crop, index) => (
              <Card key={crop.id} className="bg-muted/50">
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor={`crop-${crop.id}`}>Crop Name *</Label>
                        <Input
                          id={`crop-${crop.id}`}
                          placeholder="e.g., Wheat"
                          required
                          data-testid={`input-crop-name-${index}`}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`area-${crop.id}`}>Area (acres) *</Label>
                        <Input
                          id={`area-${crop.id}`}
                          type="number"
                          placeholder="Enter area"
                          required
                          data-testid={`input-crop-area-${index}`}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`location-${crop.id}`}>Location *</Label>
                        <Input
                          id={`location-${crop.id}`}
                          placeholder="City/District"
                          required
                          data-testid={`input-crop-location-${index}`}
                        />
                      </div>
                    </div>
                    {crops.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => removeCrop(crop.id)}
                        className="mt-8"
                        data-testid={`button-remove-crop-${index}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex items-start gap-3 p-4 border rounded-md">
            <Checkbox
              id="consent"
              checked={consent}
              onCheckedChange={(checked) => {
                setConsent(checked === true);
                console.log('Consent toggled:', checked);
              }}
              data-testid="checkbox-consent"
            />
            <div className="space-y-1">
              <Label htmlFor="consent" className="text-sm font-normal cursor-pointer">
                I consent to receive regular crop recommendations and package of practices via email/SMS
              </Label>
              <p className="text-xs text-muted-foreground">
                We'll send you personalized farming advice based on your crops and location
              </p>
            </div>
          </div>

          <Button type="submit" className="w-full" size="lg" data-testid="button-submit-registration">
            Complete Registration
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
