import React from "react";

const ReturnPolicy = () => {
  return (
    <section className="return-policy-container p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Order Cancellation and Return Policy</h1>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Cancellation Policy</h2>
        <p className="mb-4">
          The customer can choose to cancel an order any time before it's dispatched. The order cannot be canceled once it’s out for delivery. However, the customer may choose to reject it at the doorstep.
        </p>
        <p className="mb-4">
          The time window for cancellation varies based on different categories, and the order cannot be canceled once the specified time has passed.
        </p>
        <p className="mb-4">
          In some cases, the customer may not be allowed to cancel the order for free, post the specified time, and a cancellation fee will be charged. The details about the time window mentioned on the product page or order confirmation page will be considered final.
        </p>
        <p className="mb-4">
          In case of any cancellation from the seller due to unforeseen circumstances, a full refund will be initiated for prepaid orders.
        </p>
        <p className="mb-4">
          Flipkart reserves the right to accept the cancellation of any order. Flipkart also reserves the right to waive off or modify the time window or cancellation fee from time to time.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Returns Policy</h2>
        <p className="mb-4">
          Returns is a scheme provided by respective sellers directly under this policy in terms of which the option of exchange, replacement, and/or refund is offered by the respective sellers to you. All products listed under a particular category may not have the same returns policy.
        </p>
        <p className="mb-4">
          For all products, the returns/replacement policy provided on the product page shall prevail over the general returns policy. Do refer to the respective item's applicable return/replacement policy on the product page for any exceptions to this returns policy and the table below.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Part 1 – Category, Return Window, and Actions Possible</h3>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Category</th>
              <th className="border px-4 py-2">Returns Window, Actions Possible, and Conditions (if any)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Furniture</td>
              <td className="border px-4 py-2">
                10 days - Refund or Replacement. For products requiring installation, returns shall be eligible only when such products are installed by the brand's authorized personnel.
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Lifestyle: Watch, T-Shirt, Footwear, etc.</td>
              <td className="border px-4 py-2">
                10 days - Refund, Replacement, or Exchange.
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Medicine (Allopathy & Homeopathy)</td>
              <td className="border px-4 py-2">
                2 days - Refund.
              </td>
            </tr>
            {/* Add more rows as necessary */}
          </tbody>
        </table>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Part 2 - Returns Pick-Up and Processing</h3>
        <p className="mb-4">
          In case of returns where you would like item(s) to be picked up from a different address, the address can only be changed if pick-up service is available at the new address.
        </p>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Category</th>
              <th className="border px-4 py-2">Conditions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Correct Product</td>
              <td className="border px-4 py-2">IMEI/ name/ image/ brand/ serial number/ article number/ bar code should match, and MRP tag should be undetached and clearly visible.</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Complete Product</td>
              <td className="border px-4 py-2">All in-the-box accessories, freebies, and combos should be present.</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Unused Product</td>
              <td className="border px-4 py-2">The product should be unused, unwashed, unsoiled, and without any stains.</td>
            </tr>
            {/* Add more rows as necessary */}
          </tbody>
        </table>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Part 3 - General Rules for a Successful Return</h3>
        <ul className="list-disc list-inside mb-4">
          <li>In certain cases where the seller is unable to process a replacement, a refund will be given.</li>
          <li>In cases where a product accessory is found missing or defective, the seller may process a replacement of the particular accessory or issue an eGV for the amount equivalent to the price of the accessory.</li>
          <li>During open box deliveries, if you receive a different or a damaged product, you will be given a refund.</li>
          <li>For products where installation is provided by Flipkart's service partners, do not open the product packaging by yourself.</li>
          <li>Flipkart holds the right to restrict the number of returns created per order unit, post the evaluation of the product/order defect by Flipkart’s authorized representative.</li>
        </ul>
      </div>
    </section>
  );
};

export default ReturnPolicy;
