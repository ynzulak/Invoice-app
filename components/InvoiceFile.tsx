import { useContext } from 'react'
import { DataContext } from './DataProvider'
import { motion } from 'framer-motion'

import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

import GeneratePDF from './file data/GenerateButton'

import '../src/app/styles/invoice-file.scss'


const InvoiceFile = () => {
	const {
		businessName,
		businessType,
		ceoName,
		businessAddress,
		businessPhone,
		nin,
		selectedDate,
		invoiceNumber,
		invoicePrice,
		invoiceClient,
		invoiceWorkplace,
		priceInWords,
		serviceList,
		bankAccount,
		bic,
    isVisible,
    error,
	} = useContext(DataContext)

	const downloadPDF = () => {
		const input: any = document.querySelector('.invoice-file .a4')

		const pdf = new jsPDF('p', 'mm', 'a4')
		const pdfWidth = pdf.internal.pageSize.getWidth()
		const pdfHeight = pdf.internal.pageSize.getHeight()
		const scale = 2

		html2canvas(input, { scale })
			.then(canvas => {
				const imgData = canvas.toDataURL('image/png')
				pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
				pdf.save(`invoice_${invoiceNumber}.pdf`)
			})
			.catch(error => {
				console.error('Error generating PDF', error)
			})
	}

	const errorVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: { opacity: 1, y: 0 },
	}

	const resetButton = function() {
		window.location.reload();
	}

	return (
<div>

      {error &&(
		<motion.div
		className='error'
		initial='hidden'
		animate='visible'
		variants={errorVariants}>
		<div className='error'>
			<div className="error-message">
				<p>{error}</p>
				</div>
		</div>
		</motion.div>
            )}
			<GeneratePDF />
			<div className={`invoice-file ${isVisible ? 'visible' : ''}`}>
				<div className='a4'>
					<div className='business-info'>
						<p className='business-name'>„ {businessName} ”</p>
						<p>{businessType}</p>
						<p>{ceoName}</p>
						<p>{businessAddress}</p>
						<p>Tel : {businessPhone}</p>
						<p className='siret'>Nin : {nin}</p>
					</div>
					<div className='invoice-number'>
						<p>INVOICE N°{invoiceNumber}</p>
					</div>
					<div className='invoice-info'>
						<div className='date row'>
							<div className='category'>
								<p>Date:</p>
							</div>
							<div className='category-info'>
								<p>{selectedDate}</p>
							</div>
						</div>
						<div className='number row'>
							<div className='category'>
								<p>Invoice n°:</p>
							</div>
							<div className='category-info'>
								<p>NR {invoiceNumber}/SYS/2024</p>
							</div>
						</div>
						<div className='client-address row'>
							<div className='category'>
								<p>Client address:</p>
							</div>
							<div className='category-info address-div'>
								<p>{invoiceClient}</p>
							</div>
						</div>
						<div className='workplace row'>
							<div className='category'>
								<p>Workplace:</p>
							</div>
							<div className='category-info address-div'>
								<p>{invoiceWorkplace}</p>
							</div>
						</div>
						<div className='service row'>
							<div className='category'>
								<p>Service:</p>
							</div>
							<div className='category-info service-list'>
								<ol>
									{serviceList.map((service: string, index: number) => (
										<li key={index}>
											<p>{service}</p>
										</li>
									))}
								</ol>
							</div>
						</div>
						<div className='price'>
							<div className='price-row'>
								<div className='price-number'>
									<p>{invoicePrice}€</p>
								</div>
								<div className='price-in-words'>
									<p>({priceInWords})</p>
								</div>
							</div>
						</div>
						<div className='bank-number'>
							<div className='thanks'>
								<p>For your kind settlement,</p>
								<p>THANKS</p>
								<p>Please for the transfer to the Poland account:</p>
								<p>{ceoName} – beneficiary</p>
							</div>
							<div className='bank-account'>
								<p>{bankAccount}</p>
							</div>
							<div className='bic'>
								<p>Bic bank:</p>
								<p>{bic}</p>
							</div>
							<div className='name'>
								<p>{ceoName}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
      <div className={`button-div ${isVisible ? 'visible' : ''}`}>
        <div className="button">
          <button className='download-button' onClick={downloadPDF}>
            <p>Download PDF</p>
          </button>
          <button className='download-button reset' onClick={resetButton}>
            <p>Reset</p>
          </button>
        </div>
      </div>
		</div>
	)
}

export default InvoiceFile
