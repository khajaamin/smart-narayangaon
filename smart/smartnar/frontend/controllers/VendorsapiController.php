<?php
namespace frontend\controllers;

use Yii;
use yii\base\InvalidParamException;
use yii\web\BadRequestHttpException;
use yii\rest\ActiveController;
use yii\web\Response;
use common\models\CategoriesSearch; 
use common\models\Categories; 
use common\models\Sliders;
use common\models\Vendor;
use yii\db\Expression;
use common\models\VendorCategories;
use common\models\Advertisements;

/**
 * Site controller
 */
class VendorsapiController extends ActiveController
{
    public $modelClass = "common\models\Vendor";


public function behaviors()
{
    $behaviors = parent::behaviors();
    $behaviors['contentNegotiator']['formats']['text/html'] = Response::FORMAT_JSON;
    

     // remove authentication filter
    $auth = $behaviors['authenticator'];
    unset($behaviors['authenticator']);
    // add CORS filter
    $behaviors['corsFilter'] = [
        'class' => \yii\filters\Cors::className(),
    ];
    // re-add authentication filter
    $behaviors['authenticator'] = $auth;
    // avoid authentication on CORS-pre-flight requests (HTTP OPTIONS method)
    $behaviors['authenticator']['except'] = ['options'];
    return $behaviors;
}


   public function actionList()
    {

        $subcategory_id =Yii::$app->request->get('subcategory_id'); 
        //$subcategory_id = 2;
        $model = new Vendor();
        $vendorCategory=new VendorCategories();
        if(!empty($subcategory_id))
        { 
            $categories=$vendorCategory->find()->select('vendor_id')->distinct()->where(['category_id'=>$subcategory_id,'app_id'=>1])->asArray()->all();    

            for ($i=0; $i < sizeof($categories); $i++) { 
                //echo $categories[$i]['vendor_id'];
                  $data[]= $model->find()->select('*')->distinct()->where(['id'=>$categories[$i]['vendor_id'],'status'=>1])->asArray()->all();
            }

            return $data;

        }else{
            // $categories = $vendorCategory->find()->where(['category_id'=>2])->andWhere(['=','app_id', 1])->asArray()->all();
            // return $categories;
            // for ($i=0; $i < sizeof($categories); $i++) { 
            //    echo $categories[$i]['category_id']."\n";               
            //    return $model->find()->where(['id'=>$categories[$i]['vendor_id']])->andWhere(['=','status',1])->asArray()->all();
            // }

        }

     }
    public function actionShopDetails()
    {

        $id =Yii::$app->request->get('id'); 
        $model = new Vendor();
        if(!empty($id))
        { 
            return $model->find()->where(['id'=>$id])->asArray()->one();    
        }
        else{
            return $model->find()->asArray()->one();    
        }       
     }

    public function actionSlider()
    {
        $parent_id =Yii::$app->request->get('parent_id'); 
        $model = new Sliders();
        if(!empty($parent_id))
        { 
            return $model->find()->asArray()->all();  
        }
        else{
            return $model->find()->asArray()->all();   
        }       
     }
     public function actionCreateNew()
     {
            //$data=array();
        $model = new Vendor();
            $data =  json_decode(utf8_encode(file_get_contents("php://input")), false);
            if(empty($data)){
                echo 'bye';
            }else{
                $model->date=date('Y-m-d');
                $model->shop_name=$data->shopname;
                $model->shop_address=$data->shopaddress;
                $model->time_from=$data->from;
                $model->time_to=$data->to;
                $model->weekly_off=$data->weeklyoff;
                $model->shop_owner=$data->owner;
                $model->description=$data->description;
                $model->mobile=$data->contactno;
                $model->opt_mobileno=$data->optcontact;
                $model->opt_email=$data->email;
                $model->collected_by="Self Registered";
                $model->webingeer_coupon = 'No';
                if($model->save(false)){
                    $response["message"]="Thank You for Register We will Contact you very soon";
                  
                    return $response;
                }else{
                    $response['message']="Error";
                    $output = json_encode($response);
                    return $output;
                }
            }
     }

     public function actionOffersDetails()
     {
            $model = new Advertisements();
            if(!empty($parent_id))
            { 
                return $model->find()->asArray()->all();  
            }
            else{
              
                return $model->find()->where(['status'=>1,'app_id'=>1])->asArray()->all();   
            }       

     }


}


