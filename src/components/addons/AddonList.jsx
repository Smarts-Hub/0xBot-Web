"use client";
import React, { useEffect, useState } from "react";
import PublishAddonModal from "./PublishAddonModal";

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

  if (loading) return <p className="text-center text-gray-400 mt-5">Loading addons...</p>;

  return (
    <div className="mx-auto w-[90%] my-5 mt-10" id="addon-browser">
      <h2 className="text-3xl text-primary-500 text-center font-extrabold">Addon browser</h2>
      <p className="text-xl text-gray-300 text-center">Browse official and community-made addons.</p>

      <div className="mx-auto flex items-center gap-3 w-[600px] h-14">
        <PublishAddonModal />
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-5">
        {addons.map((addon) => (
          <div key={addon.id} className="flex flex-wrap w-[300px] p-5 rounded-2xl border border-gray-700">
            
            {addon.price === 0 ? (
              <a
                href={addon.url}
                className="min-w-full max-h-10 rounded-lg border border-primary-950 bg-primary-950 px-5 py-2.5 text-sm font-medium text-primary-500 transition-all hover:border-primary-800 hover:bg-primary-800 focus:ring focus:ring-primary-700"
              >
                <i className="bi bi-download"></i> Download
              </a>
            ) : (
              <a
                href={addon.url}
                className="min-w-full max-h-10 rounded-lg mb-5 border border-primary-950 bg-primary-950 px-5 py-2.5 text-sm font-medium text-primary-500 transition-all hover:border-primary-800 hover:bg-primary-800 focus:ring focus:ring-primary-700"
              >
                <i className="bi bi-tag"></i> Purchase ${addon.price.toFixed(2)}
              </a>
            )}

            <div>
              <p className="text-xl">{addon.name}</p>
              {addon.verified === true ? (
                <span className="px-2 py-1 rounded-full bg-primary-950 text-xs font-bold text-primary-500">
                <i className="bi bi-check-circle"></i> Official addon
              </span>
              ) : (
                <span className="px-2 py-1 rounded-full bg-amber-950 text-xs font-bold text-amber-500">
                <i class="bi bi-exclamation-triangle"></i> Unverified addon
              </span>
              )}
              <p className="my-2 text-gray-100 text-sm">{addon.description}</p>
              <p className="text-gray-400 text-xs mt-1">Author: {addon.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddonList;
