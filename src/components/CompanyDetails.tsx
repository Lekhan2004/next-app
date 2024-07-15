import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CompanyDetails() {
  return (
    <Card className="w-full mx-auto">
      <CardHeader></CardHeader>
      <CardContent>
        <form>
          <div className="grid gap-8">
            <div className="flex gap-4">
              <div className="flex-1 flex flex-col space-y-1.5">
                <Label htmlFor="official-name">Official Company Name</Label>
                <Input id="official-name" placeholder="Enter Official Company Name" />
              </div>
              <div className="flex-1 flex flex-col space-y-1.5">
                <Label htmlFor="friendly-name">Friendly Company Name</Label>
                <Input id="friendly-name" placeholder="Enter Friendly Company Name" />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-1 flex flex-col space-y-1.5">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="flex">
                  <div className="w-1/4">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="+351" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="+351">Portugal (+351)</SelectItem>
                      <SelectItem value="+1">USA (+1)</SelectItem>
                      <SelectItem value="+91">India (+91)</SelectItem>
                      
                    </SelectContent>
                  </Select>
                  </div>
                  <Input id="phone" placeholder="123 456 789" className="w-3/4" />
                </div>
              </div>
              <div className="flex-1 flex flex-col space-y-1.5">
                <Label htmlFor="website">Website URL</Label>
                <div className="flex">
                <div className="border rounded-tl-md rounded-bl-md flex flex-col justify-center"><div className="mx-1">http://</div></div>
                <Input id="website" placeholder="Link goes here" className="rounded-tl-none rounded-bl-none"/>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="address1">Address 1</Label>
              <Input id="address1" placeholder="Enter Address 1" maxLength={500} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="address2">Address 2</Label>
              <Input id="address2" placeholder="Enter Address 2" maxLength={500} />
            </div>

            <div className="flex gap-4">
              <div className="flex-1 flex flex-col space-y-1.5">
                <Label htmlFor="state">State</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Enter State" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="state1">State 1</SelectItem>
                    <SelectItem value="state2">State 2</SelectItem>
                    <SelectItem value="state3">State 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-1 flex flex-col space-y-1.5">
                <Label htmlFor="city">City</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Enter City" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="city1">City 1</SelectItem>
                    <SelectItem value="city2">City 2</SelectItem>
                    <SelectItem value="city3">City 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-1 flex flex-col space-y-1.5">
                <Label htmlFor="postal-code">Postal Code</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Enter Postal Code" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="postal1">Postal Code 1</SelectItem>
                    <SelectItem value="postal2">Postal Code 2</SelectItem>
                    <SelectItem value="postal3">Postal Code 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button type="submit">Continue</Button>
      </CardFooter>
    </Card>
  );
}
