import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, QrCode, Printer, Copy, Check, Table, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface TableQrModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTable?: string;
}

export const TableQrModal: React.FC<TableQrModalProps> = ({ isOpen, onClose, defaultTable = '1' }) => {
  const [tableNumber, setTableNumber] = useState<string>(defaultTable);
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentHost = typeof window !== 'undefined' ? window.location.origin : 'https://luckys-restaurant-beta.vercel.app';
  const tableUrl = `${currentHost}/?table=${tableNumber}`;
  const qrCodeApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(tableUrl)}&color=58111A&format=png`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(tableUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Table #${tableNumber} QR Code Standee - ${RESTAURANT_INFO.name}</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800;900&display=swap');
            body {
              font-family: 'Inter', sans-serif;
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 100vh;
              margin: 0;
              background-color: #f5ebe0;
            }
            .standee {
              width: 380px;
              padding: 32px;
              background: #FAF5ED;
              border: 3px solid #58111A;
              text-align: center;
              box-shadow: 0 10px 30px rgba(0,0,0,0.15);
            }
            .header-badge {
              background: #58111A;
              color: #F6E27A;
              padding: 6px 16px;
              font-size: 11px;
              font-weight: 800;
              letter-spacing: 2px;
              text-transform: uppercase;
              display: inline-block;
              margin-bottom: 12px;
            }
            .title {
              font-size: 22px;
              font-weight: 900;
              color: #1F1919;
              text-transform: uppercase;
              margin: 0 0 4px 0;
            }
            .subtitle {
              font-size: 11px;
              color: #7B1E1E;
              font-weight: 700;
              letter-spacing: 1px;
              margin-bottom: 24px;
            }
            .table-badge {
              background: #1F1919;
              color: #FFFFFF;
              font-size: 24px;
              font-weight: 900;
              padding: 8px 24px;
              display: inline-block;
              margin-bottom: 20px;
              letter-spacing: 2px;
            }
            .qr-container {
              background: #FFFFFF;
              padding: 16px;
              border: 2px solid #E6DBC5;
              display: inline-block;
              margin-bottom: 20px;
            }
            .qr-container img {
              width: 220px;
              height: 220px;
              display: block;
            }
            .scan-text {
              font-size: 13px;
              font-weight: 800;
              color: #1F1919;
              text-transform: uppercase;
              letter-spacing: 1px;
              margin-bottom: 4px;
            }
            .desc {
              font-size: 11px;
              color: #6E5C5C;
              margin: 0;
            }
            .footer-tag {
              margin-top: 24px;
              padding-top: 12px;
              border-top: 1px solid #E6DBC5;
              font-size: 10px;
              font-weight: 700;
              color: #58111A;
            }
            @media print {
              body { background: white; }
              .standee { box-shadow: none; border-color: #58111A; }
            }
          </style>
        </head>
        <body>
          <div class="standee">
            <div class="header-badge">TABLE MENU & ORDERING</div>
            <h1 class="title">LUCKY’S RESTAURANT</h1>
            <div class="subtitle">SUCHITRA, HYDERABAD</div>
            
            <div class="table-badge">TABLE #${tableNumber.padStart(2, '0')}</div>
            
            <div class="qr-container">
              <img src="${qrCodeApiUrl}" alt="Table ${tableNumber} QR Code" />
            </div>

            <div class="scan-text">SCAN TO VIEW MENU & ORDER</div>
            <p class="desc">Scan with your phone camera to view items and place your order directly from this table.</p>

            <div class="footer-tag">OPP. HDFC BANK, SUCHITRA ROAD</div>
          </div>
          <script>
            window.onload = function() {
              window.print();
            }
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md select-none font-sans overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-[#FAF5ED] border-2 border-[#58111A] shadow-2xl overflow-hidden my-auto"
        >
          {/* Header */}
          <div className="bg-[#58111A] text-white px-5 py-4 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <QrCode className="w-5 h-5 text-[#F6E27A]" />
              <div>
                <h3 className="text-base sm:text-lg font-black font-sans uppercase tracking-tight leading-none text-white">
                  Table QR Code Menu Generator
                </h3>
                <span className="text-[10px] text-[#F6E27A] font-bold uppercase tracking-wider block mt-0.5">
                  Lucky's Restaurant Suchitra
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-5 sm:p-7 space-y-6">
            
            {/* Table Number Selector */}
            <div className="bg-white p-4 border border-[#E6DBC5] flex items-center justify-between gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1919] mb-1 flex items-center gap-1.5">
                  <Table className="w-4 h-4 text-[#58111A]" />
                  <span>Select Table Number</span>
                </label>
                <p className="text-[11px] text-[#6E5C5C]">
                  Generates instant QR code pre-configured for this table.
                </p>
              </div>

              <select
                value={tableNumber}
                onChange={(e) => setTableNumber(e.target.value)}
                className="px-3 py-2 bg-[#FAF5ED] border border-[#58111A] text-sm font-black text-[#58111A] focus:outline-none cursor-pointer rounded-none"
              >
                {Array.from({ length: 30 }, (_, i) => i + 1).map((num) => (
                  <option key={num} value={num.toString()}>
                    Table #{num.toString().padStart(2, '0')}
                  </option>
                ))}
              </select>
            </div>

            {/* Standee Preview Card */}
            <div className="bg-white p-6 border-2 border-[#58111A] text-center shadow-lg relative space-y-4 max-w-sm mx-auto">
              <div className="inline-block px-3 py-0.5 bg-[#58111A] text-[#F6E27A] text-[9px] font-extrabold uppercase tracking-widest">
                TABLE MENU & ORDERING
              </div>
              
              <div>
                <h4 className="text-xl font-black font-sans uppercase text-[#1F1919] tracking-tight leading-none">
                  Lucky’s Restaurant
                </h4>
                <p className="text-[10px] font-bold text-[#7B1E1E] uppercase tracking-wider mt-0.5">
                  Suchitra, Hyderabad
                </p>
              </div>

              <div className="inline-block bg-[#1F1919] text-white px-5 py-1.5 text-lg font-black tracking-widest">
                TABLE #{tableNumber.padStart(2, '0')}
              </div>

              {/* QR Image Box */}
              <div className="p-3 bg-white border border-[#E6DBC5] inline-block shadow-inner">
                <img
                  src={qrCodeApiUrl}
                  alt={`Table ${tableNumber} QR Code`}
                  className="w-44 h-44 object-contain mx-auto"
                />
              </div>

              <div className="space-y-1">
                <div className="text-xs font-black uppercase tracking-wider text-[#1F1919]">
                  SCAN TO VIEW MENU & ORDER
                </div>
                <p className="text-[10px] text-[#6E5C5C] leading-snug">
                  Scan with your smartphone camera to order directly from Table #{tableNumber.padStart(2, '0')}.
                </p>
              </div>
            </div>

            {/* URL Link Input */}
            <div className="space-y-1.5">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1F1919]">
                Direct Table URL Link
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value={tableUrl}
                  className="w-full px-3 py-2 bg-white border border-[#E6DBC5] text-xs text-gray-700 font-mono focus:outline-none"
                />
                <button
                  onClick={handleCopyLink}
                  className="px-3 py-2 bg-[#FAF5ED] border border-[#E6DBC5] hover:bg-[#58111A] hover:text-white text-xs font-bold transition-all shrink-0 flex items-center gap-1 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'COPIED!' : 'COPY'}</span>
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                onClick={handlePrint}
                className="py-3 bg-[#58111A] hover:bg-[#7B1E1E] text-white font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Printer className="w-4 h-4 text-[#F6E27A]" />
                <span>PRINT STANDEE</span>
              </button>

              <a
                href={tableUrl}
                target="_blank"
                rel="noreferrer"
                className="py-3 bg-white hover:bg-[#1F1919] hover:text-white border border-[#1F1919] text-[#1F1919] font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm text-center"
              >
                <ExternalLink className="w-4 h-4" />
                <span>TEST TABLE #{tableNumber}</span>
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
