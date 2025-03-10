import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

interface BusinessModelData {
  segment: string;
  useCase: string;
  salesWithBattery: boolean;
  salesWithoutBattery: boolean;
  leaseWithBattery: boolean;
  leaseWithoutBattery: boolean;
  swapping: boolean;
  fastCharging: boolean;
}

const VmotoBusinessModel: React.FC = () => {
  const businessModelData: BusinessModelData[] = [
    {
      segment: "B2C",
      useCase: "FUN",
      salesWithBattery: true,
      salesWithoutBattery: true,
      leaseWithBattery: false,
      leaseWithoutBattery: false,
      swapping: false,
      fastCharging: true,
    },
    {
      segment: "B2C",
      useCase: "DAILY COMMUTE",
      salesWithBattery: true,
      salesWithoutBattery: true,
      leaseWithBattery: false,
      leaseWithoutBattery: false,
      swapping: false,
      fastCharging: true,
    },
    {
      segment: "B2B",
      useCase: "FOOD DELIVERY",
      salesWithBattery: true,
      salesWithoutBattery: true,
      leaseWithBattery: true,
      leaseWithoutBattery: true,
      swapping: true,
      fastCharging: true,
    },
    {
      segment: "B2B",
      useCase: "TAXI",
      salesWithBattery: true,
      salesWithoutBattery: true,
      leaseWithBattery: true,
      leaseWithoutBattery: true,
      swapping: true,
      fastCharging: true,
    },
    {
      segment: "B2B",
      useCase: "PARCELS DELIVERY",
      salesWithBattery: true,
      salesWithoutBattery: true,
      leaseWithBattery: true,
      leaseWithoutBattery: true,
      swapping: true,
      fastCharging: true,
    },
    {
      segment: "B2G",
      useCase: "POLICE FLEET",
      salesWithBattery: true,
      salesWithoutBattery: true,
      leaseWithBattery: true,
      leaseWithoutBattery: true,
      swapping: true,
      fastCharging: true,
    },
    {
      segment: "B2G",
      useCase: "ARMY FLEET",
      salesWithBattery: true,
      salesWithoutBattery: true,
      leaseWithBattery: true,
      leaseWithoutBattery: true,
      swapping: true,
      fastCharging: true,
    },
  ];

  // Group data by segment
  const getUniqueSegments = () => {
    return [...new Set(businessModelData.map((item) => item.segment))];
  };

  const getDataBySegment = (segment: string) => {
    return businessModelData.filter((item) => item.segment === segment);
  };

  const renderYesNo = (value: boolean) => {
    return value ? "YES" : "NO";
  };

  return (
    <MaxWidthWrapper className=" mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">OUR CUSTOMERS AND BUSINESS MODEL</h1>
        <p className="text-lg">Vmoto offers the solution to global key partners exclusively</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="p-4 bg-gray-300 text-black font-bold text-lg">Business Model</th>
              <th className="p-4 bg-black text-white font-bold">Use Case</th>
              <th className="p-4 bg-black text-white font-bold">
                Sales
                <br />
                w/ battery
                <br />
                w/ charger
              </th>
              <th className="p-4 bg-black text-white font-bold">
                Sales
                <br />
                w/o battery
                <br />
                w/ charger
              </th>
              <th className="p-4 bg-black text-white font-bold">
                Lease
                <br />
                w/ battery
                <br />
                w/ charger
              </th>
              <th className="p-4 bg-black text-white font-bold">
                Lease
                <br />
                w/o battery
                <br />
                w/o charger
              </th>
              <th className="p-4 bg-black text-white font-bold">Swapping</th>
              <th className="p-4 bg-black text-white font-bold">
                Fast
                <br />
                Charging
              </th>
            </tr>
          </thead>
          <tbody>
            {getUniqueSegments().map((segment, segmentIndex) => (
              <React.Fragment key={segment}>
                {getDataBySegment(segment).map((row, rowIndex) => (
                  <tr key={`${segment}-${row.useCase}`}>
                    {rowIndex === 0 && (
                      <td
                        className={`p-4 font-bold m-2 text-lg text-center ${
                          segment === "B2C"
                            ? "bg-teal-300"
                            : segment === "B2B"
                            ? "bg-blue-400"
                            : segment === "B2G"
                            ? "bg-blue-800 text-white"
                            : ""
                        }`}
                        rowSpan={getDataBySegment(segment).length}
                      >
                        {segment}
                      </td>
                    )}
                    <td
                      className={`p-4  m-2 text-center ${
                        segment === "B2C"
                          ? "bg-teal-300"
                          : segment === "B2B"
                          ? "bg-blue-400"
                          : segment === "B2G"
                          ? "bg-blue-800 text-white"
                          : ""
                      }`}
                    >
                      {row.useCase}
                    </td>
                    <td
                      className={`p-4 text-center ${
                        segment === "B2C"
                          ? "bg-teal-300"
                          : segment === "B2B"
                          ? "bg-blue-400"
                          : segment === "B2G"
                          ? "bg-blue-800 text-white"
                          : ""
                      }`}
                    >
                      {renderYesNo(row.salesWithBattery)}
                    </td>
                    <td
                      className={`p-4 text-center ${
                        segment === "B2C"
                          ? "bg-teal-300"
                          : segment === "B2B"
                          ? "bg-blue-400"
                          : segment === "B2G"
                          ? "bg-blue-800 text-white"
                          : ""
                      }`}
                    >
                      {renderYesNo(row.salesWithoutBattery)}
                    </td>
                    <td
                      className={`p-4 text-center ${
                        segment === "B2C"
                          ? "bg-teal-300"
                          : segment === "B2B"
                          ? "bg-blue-400"
                          : segment === "B2G"
                          ? "bg-blue-800 text-white"
                          : ""
                      }`}
                    >
                      {renderYesNo(row.leaseWithBattery)}
                    </td>
                    <td
                      className={`p-4 text-center ${
                        segment === "B2C"
                          ? "bg-teal-300"
                          : segment === "B2B"
                          ? "bg-blue-400"
                          : segment === "B2G"
                          ? "bg-blue-800 text-white"
                          : ""
                      }`}
                    >
                      {renderYesNo(row.leaseWithoutBattery)}
                    </td>
                    <td
                      className={`p-4 text-center ${
                        segment === "B2C"
                          ? "bg-teal-300"
                          : segment === "B2B"
                          ? "bg-blue-400"
                          : segment === "B2G"
                          ? "bg-blue-800 text-white"
                          : ""
                      }`}
                    >
                      {renderYesNo(row.swapping)}
                    </td>
                    <td
                      className={`p-4 text-center ${
                        segment === "B2C"
                          ? "bg-teal-300"
                          : segment === "B2B"
                          ? "bg-blue-400"
                          : segment === "B2G"
                          ? "bg-blue-800 text-white"
                          : ""
                      }`}
                    >
                      {renderYesNo(row.fastCharging)}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </MaxWidthWrapper>
  );
};

export default VmotoBusinessModel;
