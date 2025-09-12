"use client";
import React, { useEffect, useState } from "react";

function AddonList() {
  const [addons, setAddons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAddons() {
      try {
        const res = await fetch("/api/addons");
        const data = await res.json();
        setAddons(data.addons || []);
      } catch (err) {
        console.error("Error fetching addons:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchAddons();
  }, []);

  if (loading) return (
    <div className="mx-auto w-[90%] my-5 mt-10 flex justify-center items-center h-32">
      <span className="loader"></span>

    </div>
  );

  return (
    <div className="mx-auto w-[90%] my-5 mt-10" id="addon-browser">
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
        {addons.map((addon) => (
          <div
            key={addon.id}
            className="flex flex-col justify-between w-[350px] md:w-[400px] min-h-[250px]  "
          >
            <p className="text-2xl font-bold text-center mb-3">{addon.name}</p>

            <div className="flex items-center justify-center gap-3 mb-2">
              {addon.verified === true ? (
                <span className="px-2 py-1 rounded-full bg-primary-950 text-xs font-bold text-primary-500">
                  <i className="bi bi-check-circle"></i> Official addon
                </span>
              ) : (
                <span className="px-2 py-1 rounded-full bg-amber-950 text-xs font-bold text-amber-500">
                  <i className="bi bi-exclamation-triangle"></i> Unverified addon
                </span>
              )}
              <p className="text-gray-400 text-xs">by {addon.author}</p>
            </div>

            <p className="my-2 text-gray-100 text-sm text-center flex-1">
              {addon.description}
            </p>

            {addon.price === 0 ? (
              <a
                href={addon.url}
                className="mt-5 min-w-full rounded-lg border border-primary-950 bg-primary-950 px-5 py-2.5 text-sm font-medium text-primary-500 text-center transition-all hover:border-primary-800 hover:bg-primary-800 focus:ring focus:ring-primary-700"
              >
                <i className="bi bi-download"></i> Download
              </a>
            ) : (
              <a
                href={addon.url}
                className="mt-5 min-w-full rounded-lg border border-primary-950 bg-primary-950 px-5 py-2.5 text-sm font-medium text-primary-500 text-center transition-all hover:border-primary-800 hover:bg-primary-800 focus:ring focus:ring-primary-700"
              >
                <i className="bi bi-tag"></i> Purchase ${addon.price.toFixed(2)}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddonList;
