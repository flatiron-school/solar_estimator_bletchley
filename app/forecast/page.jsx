import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"


export default function ForecastPage(){
    return (
        <Card>
          <CardHeader>
            <CardTitle>Solar Energy Production Forecast</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full aspect-[4/3]">
                {/* insert rechart here */}
              {/* <TimeseriesChart className="w-full aspect-[4/3]" /> */}
            </div>
          </CardContent>
        </Card>
    )
}