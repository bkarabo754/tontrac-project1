import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

const TabLayouts = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  return (
    <div className="flex flex-col h-full w-full overflow-hidden">
      <Tabs defaultValue="general" className="w-[400px] mb-10">
        <TabsList>
          <TabsTrigger
            onClick={() => navigate(`/users/${userId}/edit`)}
            value="general"
            // className="border rounded-sm bg-primary px-20 ml-[-10px] text-text"
          >
            General
          </TabsTrigger>
          <TabsTrigger
            onClick={() => navigate(`/users/${userId}/posts`)}
            value="posts"
            // className={"ml-20 text-text bg-primary border-b-2"}
          >
            Posts
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div className=" flex flex-col h-full w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default TabLayouts;
