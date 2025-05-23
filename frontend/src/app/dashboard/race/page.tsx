"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

interface IRace {
  name: string;
  trait: string;
  weight: number;
}

export default function Page() {
  const [races, setRaces] = useState<IRace[]>([]);
  const [page, setPage] = useState(1);
  const searchParams = useSearchParams();

  useEffect(() => {
    setPage(parseInt(searchParams.get("page") || "1"));
    const fetchRaces = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/races?page=${page}`
        );
        const data = await response.json();
        console.log(data);
        setRaces(data.metadata);
      } catch (error) {
        console.error("Error fetching races:", error);
      }
    };

    fetchRaces();
  }, [page]);

  return (
    <Table className="w-[1000px] mx-auto space-y-8 py-12 px-8 sm:px-12 lg:px-16 border-t border-b border-gray-300 dark:border-gray-600 text-sm">
      <TableHeader className="bg-gray-50 dark:bg-gray-800">
        <TableRow>
          <TableHead className="w-[60px] text-center">Index</TableHead>
          <TableHead className="w-[60px] text-center">Name</TableHead>
          <TableHead className="text-center">Trait</TableHead>
          <TableHead className="text-center">Weight</TableHead>
          <TableHead className="text-center">Control</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="bg-white dark:bg-gray-900">
        {races.map((race, index) => (
          <TableRow
            key={race.name}
            className="hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <TableCell className="font-medium text-center">
              {index + 1}
            </TableCell>
            <TableCell className="font-medium">{race.name}</TableCell>
            <TableCell>{race.trait}</TableCell>
            <TableCell className="text-center">{race.weight}</TableCell>
            <TableCell className="text-center">
              <Button
                variant="outline"
                size="sm"
                className="mr-2 text-gray-600 dark:text-gray-400"
              >
                Edit
              </Button>
              <Button
                variant="outline"
                size="sm"
                color="red"
                className="text-red-600 dark:text-red-400"
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
