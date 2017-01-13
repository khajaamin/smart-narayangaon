<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "vendor".
 *
 * @property integer $id
 * @property integer $app_id
 * @property string $date
 * @property string $shop_name
 * @property integer $category_id
 * @property integer $subcategory_id
 * @property string $shop_address
 * @property string $shop_image
 * @property string $time_from
 * @property string $time_to
 * @property string $weekly_off
 * @property string $shop_owner
 * @property string $description
 * @property integer $mobile
 * @property integer $opt_mobileno
 * @property string $email
 * @property string $opt_email
 * @property string $website
 * @property double $map_location
 * @property string $collected_by
 * @property string $webingeer_coupon
 * @property integer $status
 */
class Vendor extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public $file;
    
    public static function tableName()
    {
        return 'vendor';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['app_id', 'date', 'shop_name', 'shop_address', 'time_from', 'time_to', 'weekly_off', 'shop_owner', 'description', 'mobile', 'opt_mobileno', 'email', 'opt_email', 'website', 'map_location', 'collected_by', 'webingeer_coupon'], 'required'],
            [['app_id','mobile', 'opt_mobileno', 'status'], 'integer'],
            [['file'],'file'],
            [['date', 'time_from', 'time_to'], 'safe'],
            [['map_location'], 'number'],
            [['webingeer_coupon'], 'string'],
            [['shop_name', 'shop_address',  'weekly_off', 'shop_owner', 'description', 'email', 'opt_email', 'website', 'collected_by'], 'string', 'max' => 255],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'app_id' => 'App ID',
            'date' => 'Date',
            'shop_name' => 'Shop Name',
            'category_id' => 'Category ID',
            'subcategory_id' => 'Subcategory ID',
            'shop_address' => 'Shop Address',
            'shop_image' => 'Shop Image',
            'time_from' => 'Time From',
            'time_to' => 'Time To',
            'weekly_off' => 'Weekly Off',
            'shop_owner' => 'Shop Owner',
            'description' => 'Description',
            'mobile' => 'Mobile',
            'opt_mobileno' => 'Opt Mobileno',
            'email' => 'Email',
            'opt_email' => 'Opt Email',
            'website' => 'Website',
            'map_location' => 'Map Location',
            'collected_by' => 'Collected By',
            'webingeer_coupon' => 'Webingeer Coupon',
            'status' => 'Status',
        ];
    }
}
