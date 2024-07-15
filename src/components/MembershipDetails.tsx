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
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function MembershipDetails() {
  return (
    <Card className="w-full max-w-lg mx-auto dark" >
      <CardHeader>
        <CardTitle>Membership Details</CardTitle>
        <CardDescription>Choose your billing preferences and more.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <Tabs defaultValue="monthly" className="w-full flex justify-center dark2">
            <TabsList className="">
              <TabsTrigger value="monthly" className="w-full">Monthly billing</TabsTrigger>
              <TabsTrigger value="yearly">Yearly (Save up to 25%)</TabsTrigger>
            </TabsList>
            <TabsContent value="monthly">
            </TabsContent>
            <TabsContent value="yearly">
            </TabsContent>
          </Tabs>
          <div className="mt-4 flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <div className="flex-1 flex flex-col space-y-1.5">
                <Label htmlFor="seats">Number of Seats</Label>
                <div className="flex items-center w-full">
                  <Input id="seats" className="text-center mx-2" value="01" readOnly />
                  <Button className="bg-white text-black" size="icon">-</Button>
                  <Button className="bg-white text-black" size="icon">+</Button>
                </div>
              </div>
              <div className="flex-1 flex flex-col space-y-1.5">
                <Label htmlFor="currency">Invoice Currency</Label>
                <div className="flex items-center w-full">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="🇵🇹" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">🇺🇸 USD</SelectItem>
                      <SelectItem value="eur">🇪🇺 EUR</SelectItem>
                      <SelectItem value="inr">🇮🇳 INR</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input id="currency" className="ml-2" value="USD" readOnly />
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-1.5 w-full">
              <Label>Billing Cycle</Label>
              <RadioGroup defaultValue="beginning" className="flex w-full justify-around">
                <div className="flex items-center w-full space-x-2 border p-4 rounded-lg">
                  <RadioGroupItem value="beginning" id="beginning" />
                  <Label htmlFor="beginning">Beginning of Period</Label>
                </div>
                <div className="flex items-center w-full space-x-2 border p-4 rounded-lg">
                  <RadioGroupItem value="end" id="end" />
                  <Label htmlFor="end">End of Period</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
