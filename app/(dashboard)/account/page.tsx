"use client";

import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { useUser } from "@auth0/nextjs-auth0/client";

const AccountPage = () => {
  const { user, error, isLoading } = useUser();
  return (
    // <div className="px-4 lg:px-8">
    //   Account page!
    // </div>
    <div>
      <h1 className="text-3xl mb-4 font-bold text-center mt-[20px]">Account Details</h1>
      <Card className="mx-auto max-w-[600px]">
        <CardHeader className="pb-0">
          <CardTitle className="text-2xl">{user?.name}</CardTitle>
          <CardDescription className="text-sm">Personal Account</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-sm/relaxed">Email</div>
            <div className="text-right font-medium">{user?.email}</div>
            <div className="text-sm/relaxed">Pro Subscription</div>
            <div className="text-right font-medium">*No</div>
            <div className="text-sm/relaxed">Credits Remaining</div>
            <div className="text-right font-medium">*10</div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default AccountPage;