import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"


export default function MapPage(){
    return (
        <Card>
        <CardHeader>
          <CardTitle>Solar Estimate Map</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full aspect-[4/3]">
            <div>
              <div />
              <div />
            </div>
          </div>
        </CardContent>
      </Card>
    )
}