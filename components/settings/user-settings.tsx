import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import Link from 'next/link'
import { CirclePlusIcon } from 'lucide-react'
import { UserSettingsForm } from './user-settings-form'

export const UserSettings = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex-1 flex">
          <div className="">
            <CardTitle className="text-md md:text-2xl">
              Settings
            </CardTitle>
            <CardDescription className="text-sm">
              Manage your account.
            </CardDescription>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Button asChild size="sm" className="h-8 gap-1">
              <Link href="/create-collection">
                <CirclePlusIcon className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Add Collection
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="container mx-auto">
        <UserSettingsForm />
      </CardContent>
    </Card>
  )
}
