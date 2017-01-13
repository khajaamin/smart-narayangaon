<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $searchModel common\models\VendorSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Vendors';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="vendor-index">

    <h1><?= Html::encode($this->title) ?></h1>
    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <p>
        <?= Html::a('Create Vendor', ['create'], ['class' => 'btn btn-success']) ?>
    </p>
    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

        //    'id',
            'app_id',
            'date',
            'shop_name',
           // 'category_id',
            // 'subcategory_id',
            'shop_address',
            'shop_image',
   //         'time_from',
    // /        'time_to',
            'weekly_off',
            'shop_owner',
///            'description',
            // 'mobile',
            // 'opt_mobileno',
            // 'email:email',
            // 'opt_email:email',
            // 'website',
            // 'map_location',
            // 'collected_by',
            // 'webingeer_coupon',
            // 'status',

            ['class' => 'yii\grid\ActionColumn'],
        ],
    ]); ?>
</div>
