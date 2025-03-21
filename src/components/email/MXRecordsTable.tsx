
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export interface MXRecord {
  priority: number;
  host: string;
  pointsTo: string;
  ttl?: string;
}

interface MXRecordsTableProps {
  records: MXRecord[];
  title?: string;
  description?: string;
}

const MXRecordsTable = ({ 
  records, 
  title = "MX Records Configuration", 
  description = "Use these MX records to configure your email service." 
}: MXRecordsTableProps) => {
  const { toast } = useToast();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "The MX record has been copied to your clipboard.",
    });
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
      <h2 className="text-2xl font-bold text-brand-navy mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="overflow-x-auto">
        <Table className="w-full border-collapse">
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="font-medium">Priority</TableHead>
              <TableHead className="font-medium">Host</TableHead>
              <TableHead className="font-medium">Points To</TableHead>
              <TableHead className="font-medium">TTL</TableHead>
              <TableHead className="font-medium"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {records.map((record, index) => (
              <TableRow key={index} className="border-b hover:bg-gray-50">
                <TableCell>{record.priority}</TableCell>
                <TableCell>{record.host}</TableCell>
                <TableCell className="font-mono text-sm">{record.pointsTo}</TableCell>
                <TableCell>{record.ttl || "3600"}</TableCell>
                <TableCell>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => copyToClipboard(`${record.priority} ${record.pointsTo}`)}
                    className="flex items-center gap-1"
                  >
                    <Copy className="h-3.5 w-3.5" />
                    <span className="sr-only md:not-sr-only md:inline-block">Copy</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className="mt-4 text-sm text-gray-500">
        <p>Note: Changes to DNS settings may take 24-48 hours to fully propagate.</p>
      </div>
    </div>
  );
};

export default MXRecordsTable;
