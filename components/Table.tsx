import { CheckIcon } from "@heroicons/react/24/outline";

function Table({
  selectedPlan,
}: {
  selectedPlan: "basic" | "standart" | "premium";
}) {
  return (
    <table>
      <tbody className="divide-y divide-[gray]">
        <tr className="tableRow">
          <td className="tableDataTitle">Monthly price</td>
          <td
            className={`tableDataFeature ${
              selectedPlan === "basic" ? "text-[#E50914]" : "text-[gray]"
            }`}
          >
            $9.99
          </td>
          <td
            className={`tableDataFeature ${
              selectedPlan === "standart" ? "text-[#E50914]" : "text-[gray]"
            }`}
          >
            $15.49
          </td>
          <td
            className={`tableDataFeature ${
              selectedPlan === "premium" ? "text-[#E50914]" : "text-[gray]"
            }`}
          >
            $19.99
          </td>
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Video quality</td>
          <td
            className={`tableDataFeature ${
              selectedPlan === "basic" ? "text-[#E50914]" : "text-[gray]"
            }`}
          >
            Good
          </td>
          <td
            className={`tableDataFeature ${
              selectedPlan === "standart" ? "text-[#E50914]" : "text-[gray]"
            }`}
          >
            Better
          </td>
          <td
            className={`tableDataFeature ${
              selectedPlan === "premium" ? "text-[#E50914]" : "text-[gray]"
            }`}
          >
            Best
          </td>
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Resolution</td>
          <td
            className={`tableDataFeature ${
              selectedPlan === "basic" ? "text-[#E50914]" : "text-[gray]"
            }`}
          >
            720p
          </td>
          <td
            className={`tableDataFeature ${
              selectedPlan === "standart" ? "text-[#E50914]" : "text-[gray]"
            }`}
          >
            1080p
          </td>
          <td
            className={`tableDataFeature ${
              selectedPlan === "premium" ? "text-[#E50914]" : "text-[gray]"
            }`}
          >
            4K+HDR
          </td>
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">
            Watch on your TV, computer, mobile phone and tablet
          </td>
          <td
            className={`tableDataFeature ${
              selectedPlan === "basic" ? "text-[#E50914]" : "text-[gray]"
            }`}
          >
            <CheckIcon className="inline-block h-8 w-8" />
          </td>{" "}
          <td
            className={`tableDataFeature ${
              selectedPlan === "standart" ? "text-[#E50914]" : "text-[gray]"
            }`}
          >
            <CheckIcon className="inline-block h-8 w-8" />
          </td>{" "}
          <td
            className={`tableDataFeature ${
              selectedPlan === "premium" ? "text-[#E50914]" : "text-[gray]"
            }`}
          >
            <CheckIcon className="inline-block h-8 w-8" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
