<html>
    <head>
        <style>
  table{
      border-collapse: collapse;
      padding: 0 0 20px;
      width: 100%;
      margin: 0 auto;
  }        
        #transaksi{
          margin: 0 auto;
        }
        #transaksi th{
          border: 1px solid #000;
          padding: 3px;
          text-align: center;
        }
        #transaksi td{
          border: 1px solid #000;
          padding: 3px;
          vertical-align: top;
        }
        .padding{
            padding-top: 50px;
        }
      
        
        </style>
    </head>
    <body>
        <img  class ="logo" src="system/images/almindo.jpg" />
        <h2 style="text-align: center;">PACKING LIST</h2>
        <table align="right" id="cust">
          <tr>
            <td>NOMOR </td><td> : </td><td width='200'><?php echo $tr_nomor; ?></td>
          </tr>
          <tr>
            <td>CUSTOMER </td><td> : </td><td><?php echo $tr_customer; ?></td>
          </tr>          
        </table>
        <table>
          <tr>
            <td>SUPPLIER </td><td> : </td><td><?php echo $tr_supplier; ?></td>
          </tr>
          <tr>
            <td>TANGGAL </td><td> : </td><td><?php echo $tr_tanggal; ?></td>
          </tr>          
        </table>
        <br>
        <hr style="border-style: dashed;" ><hr style="border-style: dashed;">
        <br>
        <table id="transaksi" align="center">
            <tr>
                <th width='25'>NO</th>
                <th width='100'>NO SJ.</th>
                <th width='250'>ITEM</th>
                <th width='125'>PO.</th>
                <th width='70'>DATE</th>
                <th width='80'>QTY</th>
                <th width='60'>UNIT</th>
                <th width='90'>PRICE</th>
                <th width='100'>AMOUNT</th>
                <th width='70'>GW (KG)</th>
                <th width='50'>PACK</th>
            </tr>      
            <?php $no = 1; ?>
            <?php $totalqty = 0; ?>
            <?php $totalamount = 0; ?>
            <?php $totalweight = 0; ?>
            <?php $totalpack = 0; ?>

            <?php foreach ($tr_detail as $key => $value) { ?>
              <tr>
                <td text-align="center"><?php echo $no++ ?></td>
                <td><?php echo $value['trdetail_sjap']; ?></td>
                <td><?php echo $value['item_kode'] . ' - ' . $value['item_nama']; ?></td>
                <td><?php echo $value['trdetail_po']; ?></td>
                <td><?php echo $value['trdetail_date']; ?></td>
                <td text-align="right"><?php echo number_format($value['trdetail_qty']) ?></td>
                <td><?php echo $value['trdetail_unit']; ?></td>
                <td text-align="right"><?php echo number_format($value['trdetail_price']) ?></td>
                <td text-align="right"><?php echo number_format($value['trdetail_amount']) ?></td>
                <td text-align="right"><?php echo number_format($value['trdetail_weight']) ?></td>
                <td text-align="right"><?php echo number_format($value['trdetail_pack']) ?></td>
              </tr>     
              <?php $totalqty += $value['trdetail_qty']; ?>
              <?php $totalamount+= $value['trdetail_amount']; ?>
              <?php $totalweight+= $value['trdetail_weight']; ?>
              <?php $totalpack+= $value['trdetail_pack']; ?>
            <?php } ?>
              <tr>
                  <td colspan="3" text-align="center" ><b>TOTAL</b></td>
                  <td></td>
                  <td></td>
                  <td text-align="right"><b><?php echo number_format($totalqty); ?></b></td>
                  <td></td>
                  <td></td>
                  <td text-align="right"><b><?php echo number_format($totalamount); ?></b></td>
                  <td text-align="right"><b><?php echo number_format($totalweight); ?></b></td>
                  <td text-align="right"><b><?php echo number_format($totalpack); ?></b></td>
              </tr>
        </table>
        <table>
            <tr>
                <td width="200">
                    
                </td>
                <td width="320"></td>
                <td width="1000" text-align="center">
                    Tangerang, <?php echo $tr_tanggal; ?>
                </td>
            </tr>
            <tr><td></td>
                <td></td>
                <td text-align="center">
                    Yang Memberikan,
                </td>
            </tr>
            <tr>
                <td class="padding" text-align="center">
                </td>
                <td></td>
                <td class="padding" text-align="center">
                    ( ____________________ )
                </td>
            </tr>
        </table>
    </body>
</html>