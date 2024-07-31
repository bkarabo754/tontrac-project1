import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Link } from "react-router-dom";

const AlertD = () => {
  return (
    <div className="ml-auto mr-5">
      <AlertDialog>
        <AlertDialogTrigger className="border py-2 px-4 sm:py-3 sm:px-6 mt-3 md:py-4 md:px-8 lg:py-4 lg:px-10 rounded-lg text-text font-semibold bg-destructive whitespace-nowrap">
          Services
        </AlertDialogTrigger>
        <AlertDialogContent className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-4 sm:p-6 md:p-8 lg:p-10">
          <AlertDialogHeader className="mt-8 md:mt-1">
            <AlertDialogTitle className="text-text font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">
              Are you absolutely sure?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-accent text-sm sm:text-base md:text-lg lg:text-base">
              We would greatly appreciate your support as we strive to provide meaningful services in the tech industry.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-2 mt-4">
            <AlertDialogCancel className="text-text hover:bg-background w-full sm:w-auto py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base">
              Cancel
            </AlertDialogCancel>
            <Link
              to="https://www.tontrac.co.za/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <AlertDialogAction className="bg-destructive text-text hover:bg-destructive w-full sm:w-auto py-2 sm:py-3 px-3 sm:px-6 text-sm sm:text-base whitespace-nowrap">
                Continue
              </AlertDialogAction>
            </Link>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AlertD;
