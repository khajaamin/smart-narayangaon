<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model common\models\Vendor */

$this->title = $model->id;
$this->params['breadcrumbs'][] = ['label' => 'Vendors', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="vendor-view">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Update', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
        <?= Html::a('Delete', ['delete', 'id' => $model->id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => 'Are you sure you want to delete this item?',
                'method' => 'post',
            ],
        ]) ?>
    </p>

    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
            'id',
            'app_id',
            'date',
            'shop_name',
           /* 'category_id',
            'subcategory_id',*/
            'shop_address',
            'shop_image',
            'time_from',
            'time_to',
            'weekly_off',
            'shop_owner',
            'description',
            'mobile',
            'opt_mobileno',
            'email:email',
            'opt_email:email',
            'website',
            'map_location',
            'collected_by',
            'webingeer_coupon',
            'status',
        ],
    ]) ?>

</div>
