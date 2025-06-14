import React from "react";

const data = [
  { month: "Jan", carbon: 5400, water: 980, waste: 750 },
  { month: "Feb", carbon: 5100, water: 960, waste: 720 },
  { month: "Mar", carbon: 5300, water: 950, waste: 700 },
  { month: "Apr", carbon: 5600, water: 930, waste: 680 },
  { month: "May", carbon: 5200, water: 920, waste: 670 },
  { month: "Jun", carbon: 4900, water: 900, waste: 650 },
  { month: "Jul", carbon: 4700, water: 880, waste: 640 },
  { month: "Aug", carbon: 4500, water: 870, waste: 630 },
  { month: "Sep", carbon: 4300, water: 860, waste: 620 },
  { month: "Oct", carbon: 4100, water: 840, waste: 610 },
  { month: "Nov", carbon: 3900, water: 820, waste: 600 },
  { month: "Dec", carbon: 3700, water: 800, waste: 590 },
];

export default function AnalysisEnvironmentChart() {
  return (
    <div>
      <div className="p-6 bg-white rounded-lg shadow-md md:block hidden">
        <h3 className="text-lg font-semibold mb-4">
          Environmental Metrics (2023)
        </h3>

        {/* Legend */}
        <div className="flex mb-4 justify-end">
          <div className="flex items-center mx-2">
            <div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
            <span className="text-xs">Carbon (kg)</span>
          </div>
          <div className="flex items-center mx-2">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
            <span className="text-xs">Water (kL)</span>
          </div>
          <div className="flex items-center mx-2">
            <div className="w-3 h-3 rounded-full bg-amber-500 mr-1"></div>
            <span className="text-xs">Waste (kg)</span>
          </div>
        </div>

        {/* Chart Container */}
        <div className="relative h-64">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between text-xs text-gray-500">
            <span>6000</span>
            <span>4500</span>
            <span>3000</span>
            <span>1500</span>
            <span>0</span>
          </div>

          {/* Chart */}
          <div className="ml-12 h-full flex items-end">
            {data.map((item, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                {/* Carbon Bar */}
                <div
                  className="w-3 bg-blue-500 mb-1 transition-all duration-300 hover:bg-blue-600 z-50"
                  style={{ height: `${(item.carbon / 6000) * 100}px` }}
                  title={`Carbon: ${item.carbon}kg`}
                ></div>

                {/* Water Bar */}
                <div
                  className="w-3 bg-green-500 mb-1 transition-all duration-300 hover:bg-green-600"
                  style={{ height: `${(item.water / 6000) * 100}px` }}
                  title={`Water: ${item.water}kL`}
                ></div>

                {/* Waste Bar */}
                <div
                  className="w-3 bg-amber-500 mb-1 transition-all duration-300 hover:bg-amber-600"
                  style={{ height: `${(item.waste / 6000) * 100}px` }}
                  title={`Waste: ${item.waste}kg`}
                ></div>

                {/* X-axis label */}
                <span className="text-xs text-gray-500 mt-1">{item.month}</span>
              </div>
            ))}
          </div>

          {/* Horizontal grid lines */}
          <div className="absolute left-12 right-0 top-0 bottom-0 flex flex-col justify-between pointer-events-none">
            {[0, 1, 2, 3, 4].map((_, i) => (
              <div
                key={i}
                className="border-t border-gray-200 w-full h-0"
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="md:hidden flex justify-center items-center">
        <h1 className="text-center">
          Chart preview is not supported on mobile view
        </h1>
      </div>
    </div>
  );
}
