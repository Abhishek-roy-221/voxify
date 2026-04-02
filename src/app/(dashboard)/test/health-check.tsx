"use client"

import { useSuspenseQuery } from "@tanstack/react-query"
import { useTRPC } from "@/trpc/client"

export function HealthCheck() {

const trpc = useTRPC();
const {data} =  useSuspenseQuery(trpc.health.queryOptions());

    return(
        <div className="rounded-lg border p-6 text-center" >
          <p>
            {data.status}
          </p>

        </div>
    )
}