"use client";

import { Button } from "@/components/ui/button";
import { CardTitle, CardDescription, CardHeader, CardContent, Card, CardFooter } from "@/components/ui/card"
import toast from "react-hot-toast";

const PricePage = () => {
  const throwError = () => toast.error("Something went wrong");
  return (
    <div>
      <h1 className="text-3xl mb-4 font-bold text-center mt-[20px]">Subscription plans</h1>
      <div className="flex justify-center h-screen">
        <div className="w-full max-w-sm">
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-lg font-bold">Premium Subscription</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Unlock exclusive content and features</p>
                <p className="text-3xl font-semibold">$9.99/month</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button onClick={throwError}>Subscribe Now</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default PricePage;