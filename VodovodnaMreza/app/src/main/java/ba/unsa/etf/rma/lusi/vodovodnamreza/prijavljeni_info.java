package ba.unsa.etf.rma.lusi.vodovodnamreza;

import android.content.Intent;
import android.os.Bundle;
import android.os.PersistableBundle;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.ListView;
import android.widget.TextView;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Lusi on 4/5/2018.
 */

public class prijavljeni_info extends AppCompatActivity {
    public List<informacije> info=new ArrayList<informacije>();
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.prijavljeni_informacije);



        ArrayAdapter<informacije> adapter= new myListAdapter();
        ListView list=(ListView)findViewById(R.id.listaInfo);
        list.setAdapter(adapter);



    }



    private class myListAdapter extends ArrayAdapter<informacije>{
        public  myListAdapter(){
            super(prijavljeni_info.this,R.layout.element_liste_informacije, info);
        }

        @NonNull
        @Override
        public View getView(int position, @Nullable View convertView, @NonNull ViewGroup parent) {
            //Da se osiguramo da imamo view s kojim cemo radit
            View itemView=convertView;
            if(itemView==null){
                itemView=getLayoutInflater().inflate(R.layout.element_liste_informacije,parent,false);
            }
           informacije trenutnaInfo=info.get(position);

            ImageView slika=(ImageView)itemView.findViewById(R.id.image);
            slika.setImageResource(trenutnaInfo.getSlika());
            TextView tekstInfo= (TextView)itemView.findViewById(R.id.textView7);
            tekstInfo.setText(trenutnaInfo.getTekstInfo());
            return itemView;

        }
    }
}
