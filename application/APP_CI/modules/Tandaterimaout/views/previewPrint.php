<style>
    page, page_footer, td{
        font-size: 12px;
	
    }
    table{
        padding: 0 0 20px;
        border-collapse: collapse;
    }
    #table th, #table td{
      border: 1px solid #000;
      padding: 3px;
    }
    tr.noBorder td {
      border: 0;
    }    
    .padding{
        padding-top: 50px;
    }
</style>
<page>
    <img src="system/images/almindo2.jpg" width="65" style="float:left;margin:0 10px 0 0;"/>
    <p>
        CV. ALMINDO PRATAMA<br/>
        Talaga Bestari Estate Balaraja Timur, Tangerang, Banten - Indonesia <br/>
        Telp : (021) 2950 9403; Email : admin.cs@almindo.co.id
    </p>
    <h3 align="center">TANDA TERIMA</h3>
    <table>
        <tr>
            <td>Nomor </td><td> : </td><td><?php echo $recout_doc ?></td>
        </tr>
        <tr>
            <td> &nbsp; </td><td> </td><td></td>
        </tr>
        <tr>
            <td>Kepada </td><td> : </td><td><?php echo $recout_to ?></td>
        </tr>
        <tr>
            <td>Sudah Terima dari </td><td> : </td><td><?php echo $recout_from ?></td>
        </tr>
    </table>
    <table id="table" align="center">
            <tr>
                <th width="30" text-align="center">NO</th>
                <th width="100" text-align="center">NO INVOICE</th>
                <th width="125" text-align="center">NO. FAKTUR PAJAK</th>
                <th width="125" text-align="center">NO PO</th>
                <th width="100" text-align="center">TGL INVOICE</th>
                <th width="100" text-align="center">NOMINAL (IDR)</th>
            </tr>
            <tbody>
                <?php
                    $no = 1;
                    $total = 0;
                    foreach ($recout_detail as $key => $value) { 
                ?>
                    <tr>
                        <td height='5' text-align="center"><?php echo $no ?></td>
                        <td height='5' text-align="center"><?php echo $value['recdetailout_invoice']; ?></td>
                        <td height='5' text-align="center"><?php echo $value['recdetailout_delivery']; ?></td>
                        <td height='5' text-align="center"><?php echo $value['recdetailout_po']; ?></td>
                        <td height='5' text-align="center"><?php echo $value['recdetailout_date']; ?></td>
                        <td height='5' text-align="right"><?php echo number_format($value['recdetailout_price']); ?></td>
                    </tr>                    
                <?php 
                    $no++;
                    $total += $value['recdetailout_price'];
                    } 
                ?>
                <?php 
                    $num = count($recout_detail);
                    if($num < 8){
                        for($num; $num < 5; $num++){
                    ?>
                            <tr>
                                <td text-align="center">&nbsp;</td>
                                <td text-align="center"></td>
                                <td text-align="center"></td>
                                <td text-align="center"></td>
                                <td text-align="center"></td>
                                <td text-align="right"></td>
                            </tr> 
                <?php
                        }
                    }
                ?>
                            <tr>
                                <td colspan="4" text-align="right">&nbsp;</td>
                                <th text-align="right">JUMLAH</th>
                                <th text-align="right"><?php echo number_format($total); ?></th>
                            </tr>                             
            </tbody>
    </table>
        <table>
            <tr>
                <td width="200">
                    Kembali Tgl :
                </td>
                <td width="320"></td>
                <td width="200" text-align="center">
                    Tangerang, <?php echo $recout_date; ?>
                </td>
            </tr>
            <tr>
                <td text-align="center">
                    Yang Memberikan,
                </td>
                <td></td>
                <td text-align="center">
                    Yang Menerima,
                </td>
            </tr>
            <tr>
                <td class="padding" text-align="center">
                    ( ____________________ )
                </td>
                <td></td>
                <td class="padding" text-align="center">
                    ( ____________________ )
                </td>
            </tr>
        </table>
</page>