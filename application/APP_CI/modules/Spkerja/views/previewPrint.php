<html>
	<head>
		<style type="text/css">
			*{
				font-weight: bold;
			}
			table {
				border-collapse: collapse;
				width: 100%;
				margin: 0 auto;
			}
		</style>
	</head>
	<body>
		<h5 style="padding: 0; margin: 0;">ALMINDO PRATAMA</h5>
		<h1 style="text-align: center;padding: 0px;margin: 0px;">SURAT PERINTAH KERJA</h1>
		<hr size="3px">
		<table align="center">
			<tr>
				<td rowspan="2" width="50">
					<h3>NO </h3>
				</td>
				<td rowspan="2" width="340" style="border-bottom: 1px solid;">
					<h3 style="color: #ff0000;"><?php echo $spk_doc ?></h3>
				</td>
				<td rowspan="2" width="30">&nbsp;</td>
				<td width="90">TANGGAL</td>
				<td width="230" style="border-bottom: 1px solid;">
					<b>
						<span style="color: #ff0000;"><?php echo $spk_date ?></span>
					</b>
				</td>
			</tr>
			<tr>
				<td>CUSTOMER</td>
				<td style="border-bottom: 1px solid;">
					<b>
						<span style="color: #ff0000;"><?php echo $spk_customer ?></span>
					</b>
				</td>
			</tr>
                        <br>
                        <tr>
				<td rowspan="2" width="50">
					NO. PO
				</td>
				<td rowspan="2" width="340" style="border-bottom: 1px solid;">
					<h4 style="color: #ff0000;"><?php echo $spk_nopo ?></h4>
				</td>
				<td rowspan="2" width="30">&nbsp;</td>
				<td width="90">Delivery Date</td>
				<td width="230" style="border-bottom: 1px solid;">
					<b>
						<span style="color: #ff0000;"><?php echo $spk_delivery ?></span>
					</b>
				</td>
			</tr>
		</table>
		<br>
		<table border="1" align="center">
			<tr>
				<td width="215" style="padding: 10px;">
					Jenis Bahan : 
					<span style="color: #ff0000;"><?php echo $value['spk_jenisbahan']; ?></span>
				</td>
                                <td width="215" style="padding: 10px;">
					Merk : 
					<span style="color: #ff0000;"><?php echo $value['spk_merk']; ?></span>
				</td>
				<td width="215" style="padding: 10px;">
					Warna Glasin : 
					<span style="color: #ff0000;"><?php echo $value['spk_glasin']; ?></span>
				</td>
			</tr>
		</table>
		<br>
		<table border="1" align="center">
			<tr>
				<td width="180" style="padding: 10px;">
					Ukuran :
					<span style="color: #ff0000;"><?php echo $value['spk_ukuranP']; ?></span> mm
					x
					<span style="color: #ff0000;"><?php echo $value['spk_ukuranL']; ?></span> mm
				</td>
                                <td width="130" style="padding: 10px;">
					Gap :
					<span style="color: #ff0000;"><?php echo $value['spk_gap']; ?></span>
				</td>
				<td width="130" style="padding: 10px;">
					Porporasi :
					<span style="color: #ff0000;"><?php echo $value['spk_porporasi']; ?></span>
				</td>
                                <td width="160" style="padding: 10px;">
					Warna Cetakan :
					<span style="color: #ff0000;"><?php echo $value['spk_warnacetakan']; ?></span>
				</td>
			</tr>
		</table>
		<br>
		<table border="1" align="center">
			<tr>
				<td width="215" style="padding: 10px;">
					Total Mata Pisau :
					<span style="color: #ff0000;"><?php echo $value['spk_jumlahpisau']; ?></span>
				</td>
				<td width="215" style="padding: 10px;">
					Baris Mata Pisau :
					<span style="color: #ff0000;"><?php echo $value['spk_matapisau']; ?></span>
				</td>
                                <td width="215" style="padding: 10px;">
                                    Bentuk Label :
                                    <span style="color: #ff0000;"><?php echo $value['spk_bentuk']; ?></span>
                                </td>
				
			</tr>
		</table>
		<br>
		<table border="1" align="center">
			<tr>
				<td width="427" valign="top">
					<table align="center">
						<tr>
							<td width="100">
								CORE
							</td>
							<td width="150">
								ARAH GULUNGAN
							</td>
							<td width="130">
								SENSOR
							</td>
						</tr>
						<tr>
							<td width="100" style=" padding: 10px 0;" valign="top">
								<span style="color: #ff0000;">
									<?php echo $value['spk_core']; ?>
								</span>
							</td>
							<td width="150" style=" padding: 10px 0;">
								<span style="color: #ff0000;">
									<?php echo $value['spk_arahgulungan']; ?>
								</span>
							</td>
							<td width="130" style=" padding: 10px 0;">
								<span style="color: #ff0000;">
									<?php echo $value['spk_sensor']; ?>
								</span>
							</td>
						</tr>
                                                <tr>
                                                    <td>Gambar Mata Pisau</td>
                                                </tr>
					</table>
				</td>
				<td width="300" height="220" valign="top" style="padding: 0px 10px;">
					Gambar Label
				</td>
			</tr>
		</table>
                <br>
		<table border="1" align="center">
			<tr>
				<td width="187" align="center">
					QTY ORDER
				</td>
				<td width="187" align="center">
					BARIS LABEL
				</td>
				<td width="187" align="center">
					QTY / <span     style="color: #ff0000;"><?php echo $value['spk_qtyname']; ?></span>
				</td>
				<td width="187" align="center">
					TOTAL / <span style="color: #ff0000;"><?php echo $value['spk_totalname']; ?></span>
				</td>
			</tr>
			<tr>
				<td style="padding: 10px;" align="center">
					<span style="color: #ff0000;">
						<?php echo number_format($value['spk_qtyorder']); ?>
					</span>
						Pcs
				</td>
				<td style="padding: 10px;" align="center">
					<span style="color: #ff0000;">
						<?php echo $value['spk_mataperbaris']; ?> LINE
					</span>
				</td>
				<td style="padding: 10px;" align="center">
					<span style="color: #ff0000;">
						<?php echo number_format($value['spk_upporder']) ;?>
					</span>
						Pcs
				</td>
				<td style="padding: 10px;" align="center">
					<span style="color: #ff0000;">
						<?php echo number_format($value['spk_totalorder']) ?>
					</span>
				</td>
			</tr>			
		</table>
		<h2 align="center">BAHAN BAKU YANG DIGUNAKAN :</h2>
		<table border="1" align="center">
			<tr>
				<td style="padding: 10px;" width="734">
					JENIS BAHAN :
				</td>
			</tr>
			<tr>
				<td style="padding: 10px;">
					<span style="color: #ff0000;">
						<?php echo $value['spk_jenisbahan'] .' - '. $value['spk_merk']; ?>
					</span>
				</td>
			</tr>
		</table>
		<br>
		<table align="center" border="1">
			<tr>
				<td style="padding: 10px;" width="345">
					UKURAN :
				</td>
                                <td align="left" rowspan="3" style="padding: 10px;" width="345"> <h3>TOTAL : <span style="color: #ff0000;"><?php echo number_format($value['total']); ?></span> M</h3><br>
                                    <h3>TOTAL : <span style="color: #ff0000;"><?php echo number_format($value['total2'],1); ?></span> M<sup>2</sup></h3>
                                </td>
			</tr>
			<tr>
				<td style="padding: 10px;">
					<span style="color: #ff0000;">
						<?php echo $value['ukuranP_digunakan']; ?>
					</span> mm
					x
					<span style="color: #ff0000;">
						<?php echo $value['ukuranL_digunakan']; ?>
					</span> m
				</td>
			</tr>
			<tr>
				<td style="padding: 10px;">
					JUMLAH ROLL : 
					<span style="color: #ff0000;"><?php echo $value['jml_roll']; ?></span>
					ROLL
				</td>
			</tr>
		</table>
		<br>
		<table border="1" align="center">
			<tr>
				<td style="padding: 10px;" width="734">
					Keterangan :
				</td>
			</tr>
			<tr>
				<td style="padding: 10px;" width="734">
                                        <?php echo $value['keterangan_digunakan']; ?>
				</td>
			</tr>
		</table>
                <br>
                <table border="1" align="center">
			<tr>
				<td width="345" style="padding: 10px;">
					Tanggal Kirim : 
					<span style="color: #ff0000;"><?php echo $spk_tglkirim ?></span>
				</td>
				<td width="345" style="padding: 10px;">
					No. Surat Jalan : 
					<span style="color: #ff0000;"><?php echo $value['spk_nosuratjalan']; ?></span>
				</td>
			</tr>
		</table>

                <table align="center">
                    <tr>
                        <td width="250" height="100" align="center">Operator</td>
                        <td width="250" align="center">Dibuat</td>
                        <td width="250" align="center">Disetujui</td>
                    </tr>
                    <tr>
                        <td width="250" align="center">(____________________)</td>
                        <td width="250" align="center">(____________________)</td>
                        <td width="250" align="center">(____________________)</td>
                    </tr>
                </table>
	</body> 
</html>